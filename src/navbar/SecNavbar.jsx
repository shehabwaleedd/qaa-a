import React from 'react'
import './Navbar.scss'
import { GiBigDiamondRing } from 'react-icons/gi'
import { BsPalette2 } from 'react-icons/bs'
import { MdOutlineDirectionsBoatFilled } from 'react-icons/md'
import { FiCamera } from 'react-icons/fi'
import { BsCameraVideo } from 'react-icons/bs'
import { MdTravelExplore } from 'react-icons/md'
import { PiDressBold } from 'react-icons/pi'
import { TbTie } from 'react-icons/tb'
const SecNavbar = () => {
    return (
        <div className='secnav'>
            <div className="secnav__container containered">
                <div className="sn__icon">
                    <GiBigDiamondRing className='sn__icon-icon' />
                    <span>Venues</span>
                </div>
                <div className="sn__icon">
                    <BsPalette2 className='sn__icon-icon' />
                    <span>Makeup Artists</span>
                </div>
                <div className="sn__icon">
                    <MdOutlineDirectionsBoatFilled className='sn__icon-icon' />
                    <span>Yachts & Boats</span>
                </div>
                <div className="sn__icon">
                    <FiCamera className='sn__icon-icon' />
                    <span>Photographers</span>
                </div>
                <div className="sn__icon">
                    <BsCameraVideo className='sn__icon-icon' />
                    <span>Videographers</span>
                </div>
                <div className="sn__icon">
                    <MdTravelExplore className='sn__icon-icon' />
                    <span>Honey-Moons</span>
                </div>
                <div className="sn__icon">
                    <PiDressBold className='sn__icon-icon' />
                    <span>Wedding Dresses</span>
                </div>
                <div className="sn__icon">
                    <TbTie className='sn__icon-icon' />
                    <span>Suits</span>
                </div>
            </div>
        </div>
    )
}

export default SecNavbar