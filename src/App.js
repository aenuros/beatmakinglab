import React, { Component } from 'react';
import NavBar from './components/elements/NavBar';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <NavBar/>
        <p>Welcome to my website!
        </p>
      </div>
    );
  }
}

export default App;
