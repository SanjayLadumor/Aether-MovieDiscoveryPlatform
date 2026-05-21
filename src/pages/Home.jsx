import { useEffect, useState } from 'react'
import Moviescard from '../components/Moviescard'
import { searchMovies, getPopularMovies } from '../services/api'

function Home() {

    const [SearchQuery, setSearchQuery] = useState("");
    const [Movies, setMovies] = useState([]);
    const [error, seterror] = useState(null);
    const [Loading, setLoading] = useState(true);
    const [searchquery, setsearchquery] = useState("");

    useEffect(() => {
        const loadpopularmovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                seterror("Failed to load Movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadpopularmovies()
    }, [])

    const submitform = async (e) => {
        e.preventDefault();
        if (!searchquery.trim()) return
        if(Loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchquery)
            setMovies(searchResults)
            seterror(null)
        }catch(err){
            console.log(err)
            seterror("Failed to Fetch Movies....")
        }
        finally{
            setLoading(false)
        }
    };

    
    return <div className="home m-2">

        <form onSubmit={submitform} className='searchform flex max-sm:flex-col justify-center gap-4 mt-10'>
            <input placeholder='Search for Movies...' type='text' className='searchinput w-[28vw] px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 outline-none text-white placeholder:text-gray-400 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 max-sm:w-full' value={searchquery} onChange={(e) => setsearchquery(e.target.value)}></input>
            <button className='searchbutton cursor-pointer px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600 font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 max-sm:w-full'>
                Submit
            </button>
        </form>

            {error && <div className='errormsg'>{error}</div>}

        {Loading ? <div className='loading'>Loading....</div> : <div className="moviesgrid mt-12 max-sm:grid-cols-2 grid grid-cols-5 gap-x-6 gap-y-12 px-10 pb-10 max-sm:px-2">
            {Movies.map(movie =>
                movie.title.toLowerCase().startsWith(searchquery) && (<Moviescard movie={movie} key={movie.id} />
                ))}
        </div>}

    </div>
}

export default Home