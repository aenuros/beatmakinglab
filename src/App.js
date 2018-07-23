import React, { Component } from 'react';
import NavBar from './components/elements/NavBar';
import Sounds from './components/Sounds';
import Sell from './components/Sell';
import Compete from './components/Compete';
import Social from './components/Social';
import './App.css'
import {Card, CardTitle} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <NavBar/>
      </div>
    );
  }
}

export default App;
