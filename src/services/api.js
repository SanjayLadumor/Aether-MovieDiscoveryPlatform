const API_KEY = "35ca6435f33a17dba658b4307b74ed6c"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {

    // const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    // const data = await response.json();
    // return data.results

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
    const response = await fetch(`${BASE_URL}/movie/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results
}
