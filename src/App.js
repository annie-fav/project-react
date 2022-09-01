import React from 'react';

import './App.css';

import NavBar from './Components/Header/NavBar';
import Cards from './Components/Main/Cards';
import Footer from '../src/Components/Footer/Footer'

const App = () => {
  return (
    <div className="page-layout">
      <div>
        <NavBar />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;

