let favm = document.getElementById("movie-details");

// When user click on detail button and we will fetch current movie saved in local storage and display it.
function movieinformation() {
  let movieListItem = document.querySelector("#movie-details");
  if (movieListItem) movieListItem.innerHTML = "";
  let item = localStorage.getItem("current_movie_item");
  console.log(item);
  let savedMovie = JSON.parse(item);
}
