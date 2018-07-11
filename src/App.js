import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <Page /> */}
      </div>
    );
  }
}

export default App;
