// fetch all ids of home page

var searchText = document.getElementById("inputSearch");
var moviesContainer = document.getElementById("movies-list");

let currentMovieLists = {};

// triggred an event when user type inside in search box

searchText.addEventListener("input", (e) => {
  const url = `http://www.omdbapi.com/?apikey=6440a370&t=${e.target.value}`;

  const fetchApi = async function () {
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    // convert json into json object
    let results = JSON.parse(localStorage.getItem("results")) || [];
    results.push(data);
    //  pass the json object into string
    localStorage.setItem("results", JSON.stringify(results));
    //  extract data of that objects and used in below
    const Title = data.Title;
    const Poster = data.Poster;
    currentMovieLists = data;
    // rendering a html element when user type in search bar
    moviesContainer.innerHTML += `  <div mt-5 class="card-body " >
     <h5  style="color:white; text-align:justify ;margin-top :10px" class="card-title">${Title}</h5>
    
     <img mt-3 class="animate" src="${Poster}">
   
     <button class="btn btn-dark" id="${
       results.length - 1
     }" name=${JSON.stringify(
      data
      // this is Favourite Button when user clicks on this it will  triggred an action
      //to add that movie in favourite list...
    )} onclick="favMovieItems(event)">Favourite</button>
     <button class="btn btn-dark" id="${
       results.length - 1
       // this is info Button when user clicks on this it will  triggred an action
       //to show information of  that movie in a movie.html file
     }" onclick=movieInfo(event)>Info</button>
     
   
   </div>`;
  };
  fetchApi();
});

//  when user click  info button to show all information related about that movie

function movieInfo(event) {
  let results = JSON.parse(localStorage.getItem("results")) || [];
  let current_movie_item = results[Number(event.target.id)];
  localStorage.setItem(
    "current_movie_item",
    JSON.stringify(current_movie_item)
  );
  window.location.assign("movie.html");
}

//  when user clicks on  favourite button to add a movie into favourite list

function favMovieItems(e) {
  const first = e.target.name.split(" ");
  const movieName = first[0] + first[1];
  console.log("details", movieName);
  if (e.target.innerHTML == "Favourite") {
    e.target.innerHTML = "Added To Favourites";
    e.target.style.backgroundColor = "orange";
    let favMovieArrayStorage =
      JSON.parse(localStorage.getItem("favMovieArrayStorage")) || [];

    console.log("favMovieArrayStorage", favMovieArrayStorage);

    let results = JSON.parse(localStorage.getItem("results")) || [];
    console.log("results", results);
    //  add movie to favMovieArrayStorage
    favMovieArrayStorage.push(results[Number(e.target.id)]);

    // pass the favMovieArrayStorage into local storage to access favouriteMovie.js
    localStorage.setItem(
      "favMovieArrayStorage",
      JSON.stringify(favMovieArrayStorage)
    );
    e.target.value = " ";
    console.log("favMovieArrayStorage", favMovieArrayStorage);
  }
}
