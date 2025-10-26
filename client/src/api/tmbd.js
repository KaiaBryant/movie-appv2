const BASE_URL = "http://localhost:3000";

export async function searchMovies(query) {
    const res = await fetch(`${BASE_URL}/search?title=${encodeURIComponent(query)}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data.movies;
}

export async function getSimilarMovies(movieId, title) {
    const res = await fetch(`${BASE_URL}/movies/${movieId}/similar?title=${encodeURIComponent(title)}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data.similar;
}