import React, { Component } from 'react'
import axios from 'axios';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
//

class Main extends Component {
    
    state = {
        startDate: new Date()
      };
    
      render() {
          const startDate = this.state.startDate;
       // const { startDate } = this.state;
        return <DatePicker 
        selected={startDate}
         onChange={this.handleChange}
        
        
        />;
      }
    
      handleChange = startDate => {
        this.setState({
          startDate
        });
      };
    }




export default  Main;
