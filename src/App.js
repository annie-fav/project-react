import React from 'react';
import { useState } from 'react'
import './App.css';
import NavBar from './Components/Header/NavBar';
import Footer from '../src/Components/Footer/Footer'
import ItemListContainer from './Components/Main/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Main/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Main/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  const [selectedId, setSelectedId] = useState(null)

  

  return (
    <BrowserRouter>
    <div className="page-layout">
      
      <div className="page-header">
        <NavBar title="Coderhouse"  />
      </div>
      
      <Routes>

       <Route path="/" element= { 
        <div className="page-body">
        <ItemListContainer welcome="Welcome to the Page!" setSelectedId={setSelectedId} />
        </div> } />

       <Route path="/categorys/:IdCategory" element= { 
        <div className="page-body">
        <ItemListContainer welcome="Welcome to the Page!" setSelectedId={setSelectedId} />
        </div> }/>
      
       <Route path="/cart" element={<Cart/>} />
      
       <Route path="/detail/:IdDetail" element={ 
        <div>
        <ItemDetailContainer selectedId={selectedId} />
        </div>}/> 
      
       </Routes>
      
      <div className="page-footer">
        <Footer />
      </div>
    
    </div>
    </BrowserRouter>
  )
}

export default App;

