import React from "react";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <div className="movie-poster-container">
                {movie.poster_path ? (
                    <img
                        src={movie.poster_path}
                        alt={movie.movieTitle}
                        className="movie-poster"
                    />
                ) : (
                    <div className="noPoster">No Image</div>
                )}
            </div>

            <div className="movie-info">
                <h3>{movie.movieTitle}</h3>
                <p className="movie-overview">
                    {movie.overview
                        ? movie.overview.length > 150
                            ? movie.overview.substring(0, 150) + "..."
                            : movie.overview
                        : "No description available."}
                </p>
            </div>
        </div>
    );
}
