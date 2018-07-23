import React, { Component } from 'react';
import axios from 'axios';
import Tutorials from './components/Tutorials';
import Form from './components/Form';
import NavBar from './components/elements/NavBar';
import Sell from './components/Sell';
import Compete from './components/Compete';
import './App.css'
import {Card, CardTitle} from 'react-materialize'

const token = document
.querySelector('meta[name="csrf-token"]')
.getAttribute('content');

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN':     token
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>Welcome
        </header>
        <NavBar/>
        {/* <Social/> */}

      </div>
    );
  }
}

export default App;
