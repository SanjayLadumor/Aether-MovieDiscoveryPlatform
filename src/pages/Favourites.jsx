import Moviescard from '../components/Moviescard'
import { useMovieContext } from '../context/MovieContext';

export default function Favourites() {

    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className="yourfav">
                Your Favourites
                <div className="moviesgrid max-sm:grid-cols-2 mt-12 grid grid-cols-5 gap-x-6 gap-y-12 px-10 pb-10 max-sm:px-2 max-sm:gap-x-4">
                    {favorites.map(movie => (
                        <Moviescard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="favpage min-h-screen flex items-center justify-center text-4xl font-bold text-gray-400 max-sm:text-2xl">
            No Favorite Movies Yet
        </div>
    );
}
