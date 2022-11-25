let favm = document.getElementById("movie-details");

// When user click on detail button and we will fetch current movie saved in local storage and display it.
function movieinformation() {
  let movieListItem = document.querySelector("#movie-details");
  if (movieListItem) movieListItem.innerHTML = "";
  let item = localStorage.getItem("current_movie_item");
  console.log(item);
  let savedMovie = JSON.parse(item);
  if (savedMovie == null) {
    item = [];
  } else {
    const Title = savedMovie.Title;
    const Poster = savedMovie.Poster;
    const info = savedMovie.Plot;
    const released = savedMovie.Released;
    const imdbRating = savedMovie.imdbRating;
    favm.innerHTML += `
      <div class="card cen" style="width: 17rem;  left:130% ">
       <img src="${Poster}" class="card-img-top"  alt="..."  width="300" height="400">
        <div class="card-body">
         <h5 class="card-title">TITLE: ${Title}</h5>
          <p  class="card-text movie-info">Plot: ${info}</p>
         </div>
        <ul class="list-group list-group-flush">
         <h5><li style="font-size:16px" class="list-group-item">RATING : &nbsp <h4 style="display:inline-block"> ${imdbRating}</h4></li></h5>
          <h5><li style="font-size:16px " class="list-group-item"> RELEASE DATE :<h4 style="display:inline-block"> ${released}</h4> </li></h5>
      </ul>
      
    
    </div>`;
  }
}
