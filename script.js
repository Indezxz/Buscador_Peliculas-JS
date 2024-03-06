api_key = 'ce46a375a28f7416216245907322db3d';
urlBase = 'https://api.themoviedb.org/3/search/movie';
urlImg = 'https://image.tmdb.org/t/p/w500'

document.getElementById('searchButton').addEventListener('click',searchMovie);

let resultContainer = document.getElementById('results');

function searchMovie() {

    let searchInput = document.getElementById('searchInput').value;
    
    resultContainer.innerHTML = "cargando... ";

    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then(response => response.json())
    .then(response =>{
        displayMovies(response.results)
        console.log(response);
    })
};

function displayMovies(movies) {
    
    resultContainer.innerHTML = " ";

    if (movies.length === 0) {
        resultContainer.innerHTML = '<h3 style="color: blanchedalmond" >No se encontraron resultados para tu búsqueda. </h3>'
        return;
    }
    movies.forEach(movie => {
        let divMovie = document.createElement('div');
        divMovie.classList.add('movie');

        let title = document.createElement('h2');
        title.textContent = movie.original_title;

        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date;

        let overview = document.createElement('p');
        overview.textContent = movie.overview;

        let poster = document.createElement('img');
        poster.src = `${urlImg}${movie.poster_path}`

        divMovie.appendChild(poster);
        divMovie.appendChild(title);
        divMovie.appendChild(releaseDate);
        divMovie.appendChild(overview);

        resultContainer.appendChild(divMovie);
    });

}