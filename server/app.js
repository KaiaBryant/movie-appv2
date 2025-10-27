const express = require('express') //package 
const path = require('path')
const cors = require('cors')

require('dotenv').config({ path: path.join(__dirname, '.env') });

const movieSearch = require('./utils/movies')
const similarMovies = require('./utils/similar')

const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

// // creating path to public directory
// const publicDirectoryPath = path.join(__dirname, '../public')
// app.use(express.static(publicDirectoryPath))

// API endpoint for movie search that returns movies
app.get('/search', (req, res) => {
    if (!req.query.title) {
        return res.json({ error: 'You must provide a movie title!' });
    }

    movieSearch(req.query.title, (error, movieData) => {
        if (error) {
            console.log('Movie search error:', error);
            return res.json({ error });
        }

        // console.log(`Found: ${movieData.movieTitle} (ID: ${movieData.movieId})`);

        res.json({
            searchTerm: req.query.title,
            movies: movieData
        });
    });
});


// Similar movie endpoint returns similar movies 
app.get('/movies/:movieId/similar', (req, res) => {
    const movieId = req.params.movieId;
    const movieTitle = req.query.title;



    similarMovies(movieId, (error, titles) => {
        if (error) {
            // console.log('Similar movies error:', error);
            return res.json({ error });
        }

        res.json({
            movie: movieTitle,
            movieId: movieId,
            similar: titles
        });
    });
});


// Start for the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    // console.log(`Serving files from: ${publicDirectoryPath}`);
});
