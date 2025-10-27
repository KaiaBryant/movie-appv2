import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard.jsx";

export default function MovieList({ movies = [] }) {
    const navigate = useNavigate();

    const handleClick = (movie) => {
        navigate(`/movie/${movie.movieId}?title=${encodeURIComponent(movie.movieTitle)}`);
    };

    return (
        <div className="movie-options">
            {movies.map((movie, index) => (
                <div
                    key={movie.movieId}
                    className="movie-option"
                    onClick={() => handleClick(movie)}
                >
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
}
