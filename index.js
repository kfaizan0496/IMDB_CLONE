var searchText = document.getElementById("inputSearch");
var moviesContainer = document.getElementById("movies-list");

let currentMovieLists = {};

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
    //  extract data of that objects and use in below
    const Title = data.Title;
    const Poster = data.Poster;
    currentMovieLists = data;
    moviesContainer.innerHTML += `  <div mt-5 class="card-body " >
     <h5  style="color:white; text-align:justify ;margin-top :10px" class="card-title">${Title}</h5>
    
     <img mt-3 class="animate" src="${Poster}">
   
     <button class="btn btn-dark" id="${
       results.length - 1
     }" name=${JSON.stringify(
      data
    )} onclick="favMovieItems(event)">Favourite</button>
     <button class="btn btn-dark" id="${
       results.length - 1
     }" onclick=movieInfo(event)>Info</button>
     
   
   </div>`;
  };
  fetchApi();
});
