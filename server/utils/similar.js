const request = require('postman-request')
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const apiKey = process.env.API_KEY;

const similarMovies = (movieId, callback) => {
    const similarURL = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`



    request({ url: similarURL, json: true }, (error, response) => { //error handling
        if (error) {
            callback('Unable to connect to movie database', undefined);
        } else if (response.body.success === false) {
            callback('Unable to find movie', undefined);
        } else if (!response.body.results || response.body.results.length === 0) {
            callback('No similar movies found', undefined);
        } else {

            // full movie details instead of just titles, first 12 results
            const movieDetails = response.body.results.slice(0, 12).map(movie => ({
                title: movie.title, //title
                overview: movie.overview, //description
                poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null //image
            }));

            callback(undefined, movieDetails);
        }
    });

}
module.exports = similarMovies;