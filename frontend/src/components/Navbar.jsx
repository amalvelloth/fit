import React from 'react'
import { useLocation } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'

function Navbar({ className }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/login';


  return (
    <nav className={`h-16 flex items-center justify-center w-full absolute z-10 ${className}`}>
      { !isHomePage && <BurgerMenu/> }
      <a href="/">
        <h1 className='text-3xl font-bold max-md:text-2xl z-50'>Fit+</h1>
      </a>
    </nav>
  )
}

export default Navbar