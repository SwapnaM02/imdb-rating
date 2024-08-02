import React from 'react'
import Logo from '../assets/imdb.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div  className='flex space-x-8 items-center pl-3 py-4 '>
    <Link to='/' className='text-blue-500 text-3xl font-bold'>
      <img className="w-[50px] " src={Logo} />
    
    </Link>
    <Link to='/' className='text-blue-500 text-3xl font-bold'> Movies
    </Link>

    <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>  watchlist 
    </Link>
    </div>
  )
}

export default Navbar
