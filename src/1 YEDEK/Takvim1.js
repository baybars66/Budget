import React, { Component } from 'react'
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
        return (
        <div className="container p-1 my-3 bg-dark text-white">
        
        <DatePicker 
        selected={startDate}
         onChange={this.handleChange}
        
        
        />;

        </div>
        )
      }
    
      handleChange = startDate => {
        this.setState({
          startDate
        });
      };
    }




export default  Main;
