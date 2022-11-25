let favm = document.getElementById("fav_movie");

// Use of this function when user click on favourite button and we will fetch favmovie by id saved in local storage and display it.
function renderMovie() {
  let favMovieList = document.querySelector("#fav_movie");
  if (favMovieList) favMovieList.innerHTML = "";
  let favMovieArray = localStorage.getItem("favMovieArrayStorage");
  console.log("favList", favMovieArray);

  let savedMovie = JSON.parse(favMovieArray);
  if (savedMovie == null) {
    favMovieArray = [];
  } else {
    savedMovie.forEach(function (el) {
      const Title = el.Title;
      const Poster = el.Poster;

      // for showing list of favourite movie
      favm.innerHTML += ` 
   <ul>
    <li>
    <div mt-5 class="card-body animate">
    <h5 class="card-title">${Title}</h5>
    <img src="${Poster}">
    <button class="btn btn-dark" id="delete"><i class="fa-solid fa-trash"></i></button>
  </div>
  </li>
  <ul>`;

      // Use of this function for removing the movie from the favourite list
      let Unfavouritelist = document.querySelectorAll("#delete");
      Unfavouritelist.forEach((remove) => {
        remove.addEventListener("click", function () {
          let favmovie =
            JSON.parse(localStorage.getItem("favMovieArrayStorage")) || [];
          let text = remove.parentElement.innerText.split("\n")[0];
          console.log("text", favmovie[0].Title === text);
          let filteredFavMovie = favmovie.filter(
            (movie) => movie.Title !== text
          );
          console.log("filtered array", filteredFavMovie);
          localStorage.setItem(
            "favMovieArrayStorage",
            JSON.stringify(filteredFavMovie)
          );
          renderMovie();
        });
      });
    });
  }
}
renderMovie();
