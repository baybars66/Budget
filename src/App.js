import React, { Component } from 'react'

import Main from './COMPONENTS/Main';
import Login from './COMPONENTS/Login';
import Data from './COMPONENTS/Data';




import './App.css';

class App extends Component {
  
  
  render() {
    return (
    <div className="container">

  
<Login />

 <Main />
 <Data />
    </div>
   );
  }
}

export default App;

