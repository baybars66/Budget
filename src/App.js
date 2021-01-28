import React, { Component } from 'react'

import Main from './COMPONENTS/Main';
import Login from './COMPONENTS/Login';
import Data from './COMPONENTS/Data';
import Anapanel from './COMPONENTS/Anapanel';
import Config from './COMPONENTS/Config';
import Imza from './COMPONENTS/Imza';
import ShowDataPage from './COMPONENTS/ShowDataPage';

import './App.css';

class App extends Component {
  render() {
      return (
        <div className="container">

        <Login />
        <Main />
        <Anapanel />
        <Config />
        <Data />
        <ShowDataPage />
        <Imza />

       </div>
      );
  }
}


export default App;

