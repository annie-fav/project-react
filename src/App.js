import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Footer from '../src/Components/Footer/Footer'
import ItemListContainer from './Components/Main/ItemListContainer';


const App = () => {
  return (
    <div className="page-layout">
      <div className="page-header">
        <NavBar title="Coderhouse" />
      </div>
      <div className="page-body">
        <ItemListContainer welcome="Welcome to the Page!" />
      </div>
      {/* <div>
        <ItemDetailContainer />
      </div> */}
      <div className="page-footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;

