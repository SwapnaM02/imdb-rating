import React from 'react'
import Logo from '../assets/imdb.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div  className='flex space-x-8 items-center pl-3 py-4 '>
    <Link to='/' >
      <img className="w-[50px] " src={Logo} />
    
    </Link>

    <div className='text-blue-500 text-3xl font-bold space-x-8'>
    <Link to='/' > Movies </Link>
    

    <Link to='/watchlist' >  watchlist </Link>
    
    </div>
    </div>
  )
}

export default Navbar
