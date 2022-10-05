import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Footer from '../src/Components/Footer/Footer'
import ItemListContainer from './Components/Main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Main/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/CartView/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';

const App = () => {
  return (
    <>

      <BrowserRouter>

        <CartProvider>

          <div className="page-layout">

            <div className="page-header">
              <NavBar title="Coderhouse" />
            </div>

            <Routes>

              <Route path="/" element={
                <div className="page-body">
                  <ItemListContainer welcome="Welcome to the Store!" />
                </div>} />

              <Route path="/categorys/:IdCategory" element={
                <div className="page-body">
                  <ItemListContainer welcome="Welcome to the Store!" />
                </div>} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/detail/:IdDetail" element={
                <div>
                  <ItemDetailContainer />
                </div>} />

            </Routes>

            {/* <Users/> */}

            <div className="page-footer">
              <Footer />
            </div>

          </div>

        </CartProvider>

      </BrowserRouter>


    </>
  )
}

export default App;

