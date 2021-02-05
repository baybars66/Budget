import React, { Component } from 'react'

import Main from './COMPONENTS/Baslik';
import Login from './COMPONENTS/Login';
import Data from './COMPONENTS/DATA/Data';
import Anapanel from './COMPONENTS/MAIN/Anapanel';
import Config from './COMPONENTS/CONF/Config';
import Imza from './COMPONENTS/Imza';
import ShowDataPage from './COMPONENTS/DATA/ShowDataPage';
import ShowQuarter from './COMPONENTS/QUARTER/ShowQuarterData';


import './App.css';

class App extends Component {
  render() {
      return (
        <div className="container">
        
        <Login />
        <Main />
        <Anapanel />

        <Config />
        <ShowQuarter />
        <Data />
        <ShowDataPage />
        <Imza />

       </div>
      );
  }
}


export default App;

