import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Footer from '../src/Components/Footer/Footer'
import ItemListContainer from './Components/Main/ItemListContainer';


const App = () => {
  return (
    <div className="page-layout">
      <div>
        <NavBar title="Coderhouse"/>
      </div>
      <div>
        <ItemListContainer welcome="Welcome to the Page!" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;

