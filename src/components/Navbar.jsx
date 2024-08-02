import React from 'react'
import Logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to='/'>
      <img src={Logo} />
    
    </Link>
    <Link to='/'> to go to home page/
    </Link>

    <Link to='/watchlist'> to go to watchlist page
    </Link>
    </>
  )
}

export default Navbar
