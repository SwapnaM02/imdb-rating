import React from 'react'
import Logo from '../assets/imdb.png'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <div  className='flex space-x-8 items-center pl-3 py-4 '>
    <Link to='/'>
      <img className="w-[50px] " src={Logo} />
    
    </Link>
    <Link to='/'> to go to home page/
    </Link>

    <Link to='/watchlist'> to go to watchlist page
    </Link>
    </div>
  )
}

export default Navbar
