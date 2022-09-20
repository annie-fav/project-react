import React from 'react';
import { useState } from 'react'
import './App.css';
import NavBar from './Components/Header/NavBar';
import Footer from '../src/Components/Footer/Footer'
import ItemListContainer from './Components/Main/ItemListContainer';
import ItemDetailContainer from './Components/Main/ItemDetailContainer';


const App = () => {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="page-layout">
      <div className="page-header">
        <NavBar title="Coderhouse" />
      </div>
      <div className="page-body">
        <ItemListContainer welcome="Welcome to the Page!" setSelectedId={setSelectedId} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <ItemDetailContainer selectedId={selectedId} />
      </div>
      <br></br>
      <br></br>
      <div className="page-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;

