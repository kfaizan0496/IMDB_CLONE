let favm = document.getElementById("fav_movie");

// Use of this function when user click on favourite button and we will fetch favmovie by id saved in local storage and display it.
function renderMovie() {
  let favMovieList = document.querySelector("#fav_movie");
  if (favMovieList) favMovieList.innerHTML = "";
  let favMovieArray = localStorage.getItem("favMovieArrayStorage");
  console.log("favList", favMovieArray);

  let savedMovie = JSON.parse(favMovieArray);
}
