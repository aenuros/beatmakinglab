import React, { Component } from 'react';
import axios from 'axios';
import Tutorials from './components/Tutorials';
import Form from './components/Form';

import Navigation from './components/elements/Navigation';
import Header from './components/elements/Header';
import UserInfo from './components/elements/UserInfo';

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
        <Header/>
        <Navigation adminvalue={this.props.adminvalue}/>
        <UserInfo user={this.props.user}/>
        <p></p>
      </div>
    );
  }
}

export default App;
