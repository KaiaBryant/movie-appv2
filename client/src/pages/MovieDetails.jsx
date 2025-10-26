import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getSimilarMovies } from "../api/tmbd.js";
import MovieCard from "../components/MovieCard.jsx";

export default function MovieDetails() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");

    const [similarMovies, setSimilarMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchSimilar() {
            try {
                const results = await getSimilarMovies(id, title);
                setSimilarMovies(results);
            } catch (err) {
                setError(err.message || "Something went wrong!");
            } finally {
                setLoading(false);
            }
        }
        fetchSimilar();
    }, [id, title]);

    if (loading) return <p>Finding Similar Movies...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="similar-results">
            <h2>Movies Similar to "{title}"</h2>
            <div className="movies-grid">
                {similarMovies.length > 0 ? (
                    similarMovies.map((movie) => (
                        <MovieCard key={movie.title} movie={movie} />
                    ))
                ) : (
                    <p>No similar movies found!</p>
                )}
            </div>
        </div>
    );
}
