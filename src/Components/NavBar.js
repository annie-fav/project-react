import React from 'react';
import './NavBar.css'
import logo from '../Assets/logo.jpg'
import icon from '../Assets/cart-icon.jpg'



const NavBar = () => {
    return (
        <>
        <img id="logo" src={logo} alt="logo"/>
        <h1>CoderHouse</h1>
        <nav>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Contact</a>
            <img id="icon" src={icon} alt="cart"/>
        </nav>
        <hr></hr>
        </>
    )
}

export default NavBar