import React, { Component } from 'react';
import NavBar from './components/elements/NavBar';
import Sell from './components/Sell';
import './App.css'
import {Card, CardTitle} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <NavBar/>
        <Sell/>
        
      </div>
    );
  }
}

export default App;
