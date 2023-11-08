import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from "react-icons/fa";
import { useRef } from 'react';


function Navbar() {
    const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <>
        <header>
            <img className='Logo' src='img/logo.png' alt='Logo' width={217}></img>
            <nav ref={navRef}>
                <Link onClick={showNavbar} className='route' to="/">Inicio</Link>
                <Link onClick={showNavbar} className='route' to="/Nosotros">Nosotros</Link>
                <Link onClick={showNavbar} className='route' to="/Servicios">Servicios</Link>
                <Link onClick={showNavbar} className='route' to="/Portafolio">Portafolio</Link>
                <Link onClick={showNavbar} className='route' to="/Contacto">Contacto</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes></FaTimes>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars></FaBars>
            </button>
        </header>
        </>
    )
}

export default Navbar