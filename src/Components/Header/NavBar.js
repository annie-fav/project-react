import React from 'react';
import '../Header/NavBar.css'
import logo from '../../Assets/logo.jpg'
import CartWidget from '../Header/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = (props) => {
  const { title } = props;

  const categorys = [
    { id: 0, name: "T-shirt", ruta:'/categorys/T-Shirt' },
    { id: 1, name: "Trousers", ruta:'/categorys/Trousers' },
    { id: 2, name: "Socks", ruta:'/categorys/Socks' },
    { id: 3, name: "Dresses", ruta:'/categorys/Dresses' },
    { id: 4, name: "Shoes", ruta:'/categorys/Shoes' },
  ]

  return (
    <>
      <img id="logo" src={logo} alt="logo" />
      <h1>{title}</h1>
      <nav>
        {categorys.map((categorys) => {
          return <NavLink className="navbar" key={categorys.id} to={categorys.ruta}>{categorys.name}</NavLink>
        })}
       <Link to="/">Home</Link> 
       <Link to="/cart">
        <CartWidget />
        </Link>
      </nav>
      <hr></hr>
    </>
  )
}

export default NavBar