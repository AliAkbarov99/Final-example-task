import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div id='navbar'>
        <div className='container'>
            <div className='navbar__logo'>
                Notary
            </div>
            <div className='navbar__links'>
                <Link to="/">Home</Link>
                <Link to="/add">Add customer</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar