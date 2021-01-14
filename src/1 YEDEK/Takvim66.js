import React, { Component } from 'react'
import DatePicker, { registerLocale }  from "react-datepicker";
 import tr from "date-fns/locale/tr"; // the locale you want
import "react-datepicker/dist/react-datepicker.css";
 
//import '../CSS/Takvim.css';
registerLocale("tr", tr); // register it with the name you want

 
class Takvim extends Component {

  state = { 
            startDate : new Date(),
            endDate : null
          
          }


onChange = (dates) => {
 
  
 const [start, end] = dates;
 console.log(start ,end);
   this.setState({
  //   //   setStartDate(start);
  // //   setEndDate(end);
  //[starDate, endDate] : dates

  startDate : start,
  endDate : end
  //   //digerstate :"kötü"
       });
       //console.log (this.state.startDate, this.state.endDate);


}

    // ToMain = (dispatch, e) => {
    //   e.preventDefault();
    //     const {LoginKon, AktifKul} = this.state;
    //     //console.log(AktifKul);
    //     dispatch({type:"AktifKul", payload:AktifKul});
    //     dispatch({type:"ToMain", payload:LoginKon});
    // }


render(){

  return (
    <DatePicker
      selected={this.state.startDate}
      onChange={this.onChange}
      startDate={this.state.startDate}
      endDate={this.state.endDate}
      selectsRange
      inline
    />
  )
}
}



export default Takvim;


//selected={startDate}