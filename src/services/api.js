const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {

    const pages = [1, 2, 3]

    const results = await Promise.all(

        pages.map(page =>
            fetch(
                `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
            ).then(res => res.json())
        )

    )

    return results.flatMap(data => data.results)

}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results
}
