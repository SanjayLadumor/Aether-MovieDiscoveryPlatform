import { useMovieContext } from "../context/MovieContext"

export default function Moviescard({ movie }) {

    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card group relative w-56 p-3 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-all duration-500">
        <div className="movie-poster">

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="h-80 w-full object-cover rounded-2xl" />

            <div className="movie-overlay absolute top-5 right-5 flex items-center justify-center" id="btnparent">
                <button
                    id="favbtn"
                    onClick={onFavoriteClick}
                    className={`h-11 w-11 rounded-full backdrop-blur-md text-xl flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer

                    ${favorite
                            ? "bg-pink-500 text-white scale-110 shadow-[0_0_25px_rgba(236,72,153,0.7)]"
                            : "bg-black/60 text-pink-400 hover:bg-pink-500 hover:text-white hover:scale-110"
                        }`}
                >
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info mt-4">
            <h3 className="text-lg font-bold text-white line-clamp-1">{movie.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{movie.release_date}</p>
        </div>
    </div>
}
