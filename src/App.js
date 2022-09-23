import React from 'react';
import { useState } from 'react'
import './App.css';
import NavBar from './Components/Header/NavBar';
import Footer from '../src/Components/Footer/Footer'
import ItemListContainer from './Components/Main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Main/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/CartView/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './Components/Examples/Users';



const App = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [cart, setCart] = useState([]);

  const addItemToCart = (item, contador) => {
    const cartItem = {
      id: item.id,
      item: {
        ...item,
      },
      count: contador
    }
    cart.push(cartItem);
    setCart(cart);
  }

  return (
    <BrowserRouter>
      <div className="page-layout">

        <div className="page-header">
          <NavBar title="Coderhouse" />
        </div>

        <Routes>

          <Route path="/" element={
            <div className="page-body">
              <ItemListContainer welcome="Welcome to the Page!" setSelectedId={setSelectedId} />
            </div>} />

          <Route path="/categorys/:IdCategory" element={
            <div className="page-body">
              <ItemListContainer welcome="Welcome to the Page!" setSelectedId={setSelectedId} />
            </div>} />

          <Route path="/cart" element={<Cart productList={cart} />} />

          <Route path="/detail/:IdDetail" element={
            <div>
              <ItemDetailContainer addItemToCart={addItemToCart} selectedId={selectedId} />
            </div>} />

        </Routes>

        {/* <Users/> */}

        <div className="page-footer">
          <Footer />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;

