import { Link, Route } from "react-router-dom"
import Home from "../pages/Home"
import { useLocation,useNavigate } from "react-router-dom"

export default function Navbar() {

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate("/")
        window.location.reload()
    }

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-[0_0_25px_rgba(168,85,247,0.2)] max-sm:w-full max-sm:px-4 max-sm:py-2">
            <div
                onClick={handleLogoClick}
                className="text-4xl font-black tracking-[0.2em] bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer select-none hover:scale-105 transition-transform duration-300 max-sm:text-2xl"
            >
                Aether
            </div>
            <div className="extra flex gap-5 text-lg font-medium max-sm:text-sm max-sm:gap-3 max-sm:font-normal">
                <Link
                    to="/"
                    className={`relative px-6 py-2.5 rounded-2xl font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 border max-sm:px-3 max-sm:tracking-tighter
                        
                        ${location.pathname === "/"
                            ? "bg-linear-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-[0_0_25px_rgba(236,72,153,0.6)] scale-105"
                            : "bg-white/5 text-gray-300 border-white/10 hover:border-pink-400 hover:text-white hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:-translate-y-1"
                        }
                    `}
                >
                    Home
                </Link>
                <Link
                    to="/Favourites"
                    className={`relative px-6 py-2.5 rounded-2xl font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 border max-sm:px-3 max-sm:tracking-tight
                        
                        ${location.pathname === "/Favourites"
                            ? "bg-linear-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-[0_0_25px_rgba(236,72,153,0.6)] scale-105"
                            : "bg-white/5 text-gray-300 border-white/10 hover:border-pink-400 hover:text-white hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:-translate-y-1"
                        }
                    `}
                >
                    Favourites
                </Link>
            </div>
        </nav>
    )
}