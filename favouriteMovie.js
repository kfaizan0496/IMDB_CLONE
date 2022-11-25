let favm = document.getElementById("fav_movie");

//  when user click on Favourites Button it will redirect the page into same tab and showing all the favourites movies
function renderFavMovie() {
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

      //   Rendering favourites movies
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

      // remove the movie from favourite list
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
          renderFavMovie();
        });
      });
    });
  }
}
renderFavMovie();
