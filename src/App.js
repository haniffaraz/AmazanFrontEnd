import React, { Component } from 'react';
import './index.css';
import Page from './components/Page';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar'
import ProductsContainer from './components/ProductsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Page />
        <SearchBar />
        <NavBar />
        <ProductsContainer />

      </div>
    );
  }
}

export default App;
