var searchText = document.getElementById("inputSearch");
var moviesContainer = document.getElementById("movies-list");

let currentMovieLists = {};

searchText.addEventListener("input", (e) => {
  const url = `http://www.omdbapi.com/?apikey=6440a370&t=${e.target.value}`;

  const fetchApi = async function () {
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
  };
});
