import React, { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieList from "../components/MovieList.jsx";
import { searchMovies } from "../api/tmbd.js";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSearch(query) {
        if (!query.trim()) {
            setError("Please enter a movie title!");
            return;
        }
        setLoading(true);
        setError("");
        try {
            const results = await searchMovies(query);
            setMovies(results);
        } catch (err) {
            setError(err.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="home">
            {/* Header with search bar */}
            <section className="search-section">
                <h1 className="app-title">RoadFlix</h1>
                <SearchBar onSearch={handleSearch} />
            </section>

            {/* Main results area */}
            <main className="results-container">
                {loading && <p>Searching for movies...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && !error && movies.length > 0 && (
                    <>
                        <h2>Choose your movie</h2>
                        <MovieList movies={movies} />
                    </>
                )}
            </main>
        </div>
    );
}
