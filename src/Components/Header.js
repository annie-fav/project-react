import React from 'react';
import logo from '../Assets/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <>
        <img src={logo} alt="logo"/>
        <h1>CoderHouse</h1>
        <nav>
            <a href="">categoria 1</a>
            <a href="">categoria 1</a>
            <a href="">categoria 1</a>
            <a href="">categoria 1</a>
        </nav>
        <img src="" alt="carrito"/>
        <hr></hr>
        </>
    )
}

export default Header