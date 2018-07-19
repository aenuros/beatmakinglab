import React, { Component } from 'react';
import NavBar from './components/elements/NavBar';
import Sell from './components/Sell';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Beat Making Labs</h1>
        </header>
        <NavBar/>
        
        <p>Welcome to my website!
        </p>
      </div>
    );
  }
}

export default App;
