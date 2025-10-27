const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const movieSearch = require("./utils/movies");
const similarMovies = require("./utils/similar");

// --- Initialize app ---
const app = express();
const port = process.env.PORT || 3000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- API Routes ---
// Search for movies
app.get("/search", (req, res) => {
    if (!req.query.title) {
        return res.json({ error: "You must provide a movie title!" });
    }

    movieSearch(req.query.title, (error, movieData) => {
        if (error) {
            console.log("Movie search error:", error);
            return res.json({ error });
        }

        res.json({
            searchTerm: req.query.title,
            movies: movieData,
        });
    });
});

// Get similar movies
app.get("/movies/:movieId/similar", (req, res) => {
    const movieId = req.params.movieId;
    const movieTitle = req.query.title;

    similarMovies(movieId, (error, titles) => {
        if (error) {
            return res.json({ error });
        }

        res.json({
            movie: movieTitle,
            movieId,
            similar: titles,
        });
    });
});

// --- Serve React build (for production) ---
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

app.get(/.*/, (_, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
});

// --- Start Server ---
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
