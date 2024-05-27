const apiKey = '1021f8d6cb46a9530572f173b762fd73';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('movieInput').value;
    searchMovies(query);
});

function searchMovies(query) {
    axios.get(apiUrl, {
        params: {
            api_key: apiKey,
            query: query
        }
    })
    .then(response => {
        displayMovies(response.data.results);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('col-md-4', 'mb-3'); // Используем классы Bootstrap для размещения элементов
        movieElement.innerHTML = `
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.overview}</p>
                </div>
            </div>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

