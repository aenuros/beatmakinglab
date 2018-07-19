import React, { Component } from 'react';
import '../../App.css'

class NavBar extends Component {
  render() {
    return (
<div class="navigation">
<ul>
  <li><a href="#">Learn</a></li>
  <li><a href="#">Sell</a></li>
  <li><a href="#">Compete</a></li>
  <li><a href="#">Sounds</a></li>
  <li><a href="#">Social</a></li>
</ul>
</div>
  )
  }
}

export default NavBar;
