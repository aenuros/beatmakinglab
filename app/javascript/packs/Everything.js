import ReactOnRails from 'react-on-rails';
import App from '../bundles/App/App';
import Trythis from '../bundles/App/components/Trythis';
import Seeadmin from '../bundles/App/components/Seeadmin';

import React, { Component } from 'react';
import axios from 'axios';
import Tutorials from '../bundles/App/components/Tutorials';
import Form from '../bundles/App/components/Form';
import NavBar from '../bundles/App/components/elements/NavBar';
import Sell from '../bundles/App/components/Sell';
import Compete from '../bundles/App/components/Compete';
import {Card, CardTitle} from 'react-materialize'


// This is how react_on_rails can see the App in the browser.

ReactOnRails.register({
App,
Trythis,
Tutorials,
Form,
NavBar,
Sell,
Compete,
Seeadmin
});
