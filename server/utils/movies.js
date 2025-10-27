const request = require('postman-request')
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const apiKey = process.env.API_KEY;

const movieSearch = (title, callback) => {
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`;

    //     request({ url: searchURL, json: true }, (error, response) => {
    //         if (error) {
    //             callback('Unable to connect to movies database')
    //         } else if (!response.body.results[0].title.length === 0) {
    //             callback('Unable to find movie. Try another search')
    //         } else {
    //             callback(undefined, {
    //                 movieId: response.body.results[0].id,
    //                 movieTitle: response.body.results[0].title
    //             })
    //         }
    //     })
    // }

    request({ url: searchURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to movies database')
        } else if (!response.body.results || response.body.results.length === 0) {
            callback('Unable to find movie. Try another search')
        } else {
            // return first 10 movies back to user
            const movieOptions = response.body.results.slice(0, 10).map(movie => ({
                movieId: movie.id,
                movieTitle: movie.title,
                overview: movie.overview,
                poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null
                //     callback(undefined, {
                //         movieId: response.body.results[0].id,
                //         movieTitle: response.body.results[0].title
                //     })
                // }
            }));
            callback(undefined, movieOptions)
        }
    });
}

module.exports = movieSearch;

