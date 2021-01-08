import React, { Component } from 'react'

import Navbar from '../compenents/Navbar';
import Users from '../compenents/Users';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
    <div className="container">
    <Navbar title = 'BAYBİ'/>  
    <hr/>
    
    <Users />

    <Navbar />  
    <hr/>
    
     
    </div>

    );
      }

     }

export default App;
