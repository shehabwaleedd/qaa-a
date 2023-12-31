import React, { useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.scss'
import { FiSearch } from 'react-icons/fi'
import { FiGlobe } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import { IoMenuOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
const Navbar = () => {
    const [accountOpen, setAccountOpen] = useState(false)
    const [languageOpen, setLanguageOpen] = useState(false)
    const handleAccontOpen = () => {
        setAccountOpen(!accountOpen)
    }
    const handleLanguageOpen = () => {
        setLanguageOpen(!languageOpen)
    }


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
                            <button className='navbar__button'>Venue Your Place</button>
                            <button className='navbar__button' onClick={handleLanguageOpen}>
                                <FiGlobe className='navbar__button-icon' />
                                <AnimatePresence>
                                    {languageOpen && (
                                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="nbr__language-dropdown" >
                                            <ul className='submenu__language'>
                                                <li>English</li>
                                                <li>French</li>
                                                <li>Spanish</li>
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                        <div className="nbr__account" onClick={handleAccontOpen}>
                            <IoMenuOutline className='navbar__account-icon' />
                            <FaUserCircle className='navbar__account-icon' />
                            <AnimatePresence mode='wait'>
                                {accountOpen && (
                                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="nbr__account-dropdown" >
                                        <ul className='submenu__account-upper'>
                                            <li>Sign In</li>
                                            <li>Sign Up</li>
                                        </ul>
                                        <ul className='submenu__account-lower'>
                                            <li>Venue Your Place</li>
                                            <li>Help Center</li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar