import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.scss'
import { FiSearch } from 'react-icons/fi'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className="navbar__left">
                    <img src={logo} alt="" />
                    <h1>VENUES</h1>
                </div>
                <div className="navbar__middle">
                    <span>Anywhere</span>
                    <span>Anytime</span>
                    <p>Anyplace</p>
                    <div className="navbar__search">
                        <FiSearch className='navbar__search-icon' />
                    </div>
                </div>
                <div className="navbar__right">
                    <button className='navbar__button'>Sign In</button>
                    <button className='navbar__button'>Sign Up</button>
                    <div className="nbr__account">
                        <h1>Account</h1>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar