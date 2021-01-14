import React, { Component } from 'react'
import DatePicker, { registerLocale }  from "react-datepicker";
import Talep from '../COMPONENTS/context';
 import tr from "date-fns/locale/tr"; // the locale you want
import "react-datepicker/dist/react-datepicker.css";
 
//import '../CSS/Takvim.css';
registerLocale("tr", tr); // register it with the name you want

 
class Takvim extends Component {


onChange = (dispatch, dates) => {
  const [start, end] = dates;
      dispatch({type:"gidis", payload:start});
       dispatch({type:"donus", payload:end});


}

  


render(){
  return(
    <Talep>
        {
            value => {
            const { startDate, endDate,dispatch} = value;

  return (
    <DatePicker
      selected={startDate}
      onChange={this.onChange.bind(this, dispatch)}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  )
}
}
</Talep>
)}
}

export default Takvim;

