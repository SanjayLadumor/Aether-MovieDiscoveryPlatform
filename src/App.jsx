import { useState } from 'react'
import './App.css'
import Moviescard from './components/Moviescard'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MovieProvider className="mainpage min-h-screen bg-linear-to-br from-black via-[#0f172a] to-black text-white">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Favourites" element={<Favourites/>}>
          </Route>
        </Routes>
      </MovieProvider>
    </>
  )
}

export default App
