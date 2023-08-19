import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.scss'
import { FiSearch } from 'react-icons/fi'
import { FiGlobe } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import {IoMenuOutline} from 'react-icons/io5'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__container containered'>
                <div className="navbar__left">
                    <img src={logo} alt="" />
                    <h1>VENUES</h1>
                </div>
                <div className="navbar__middle">
                    <span>Anywhere</span>
                    <span>Anytime</span>
                    <p>Add guests</p>
                    <div className="navbar__search">
                        <FiSearch className='navbar__search-icon' />
                    </div>
                </div>
                <div className="navbar__right">
                    <div className="nbr__container">
                        <div className="nbr__buttons">
                            <button className='navbar__button'>Place Your Venue</button>
                            <button className='navbar__button'>
                                <FiGlobe className='navbar__button-icon' />
                            </button>
                        </div>
                        <div className="nbr__account">
                            <IoMenuOutline className='navbar__account-icon' />
                            <FaUserCircle className='navbar__account-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar