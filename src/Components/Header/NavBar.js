import React from 'react';
import '../Header/NavBar.css'
import logo from '../../Assets/logo.jpg'
import CartWidget from '../Header/CartWidget'



const NavBar = (props) => {
  const { title } = props;

  const categorys = [
    { id: 0, name: "T-shirt"},
    { id: 1, name: "Trousers"},
    { id: 2, name: "Socks"},
    { id: 3, name: "Dresses"},
    { id: 4, name: "Home"}
  ]

    return (
        <>
        <img id="logo" src={logo} alt="logo"/>
        <h1>{title}</h1>
        <nav>
            { categorys.map( (categorys) => {
            return <a key={categorys.id} href=''>{categorys.name}</a>
             }) }
            <CartWidget/>
        </nav>
        <hr></hr>
        </>
    )
}

export default NavBar