import ReactOnRails from 'react-on-rails';
import App from '../bundles/App/App';
import Seeadmin from '../bundles/App/components/Seeadmin';

import React, { Component } from 'react';
import axios from 'axios';
import Tutorials from '../bundles/App/components/Tutorials';
import Form from '../bundles/App/components/Form';

import Navigation from '../bundles/App/components/elements/Navigation';
import Header from '../bundles/App/components/elements/Header';
import UserInfo from '../bundles/App/components/elements/UserInfo';


import Home from '../bundles/App/components/Home';
import Sell from '../bundles/App/components/Sell';
import Compete from '../bundles/App/components/Compete';
import Social from '../bundles/App/components/Social';
import Sounds from '../bundles/App/components/Sounds';
import Home from '../bundles/App/components/Home';
import {Card, CardTitle} from 'react-materialize';


// This is how react_on_rails can see the App in the browser.

ReactOnRails.register({
App,
Home,
Tutorials,
Form,
Navigation,
Sell,
Compete,
Seeadmin,
Social,
Sounds,
Header,
UserInfo,
Home
});
