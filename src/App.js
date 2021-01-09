import React, { Component } from 'react'

import Main from './compenents/Main';
import Login from './compenents/Login';




import './App.css';

class App extends Component {
  
  
  render() {
    return (
    <div className="container">

      
 <Login />
 <Main />
    </div>
   );
  }
}

export default App;

