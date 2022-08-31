import React from 'react';
import logo from '../Assets/logo.jpg'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
        <img id="logo" src={logo} alt="logo"/>
        <h1>CoderHouse</h1>
        <nav>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Contact</a>
        </nav>
        <img id="icon" src="" alt="carrito"/>
        <hr></hr>
        </>
    )
}

export default NavBar