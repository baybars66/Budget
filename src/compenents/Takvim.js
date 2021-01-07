import React, { useState} from 'react'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";





const Takvim=()=> {
    
        const [startDate, setStartDate] = useState(new Date());
        //const startDate = this.state.startDate;
     // const { startDate } = this.state;
     return( 
        <div className="container p-0 my-3 bg-dark text-white">
            <div className="container">
            <div className="jumbotron">
         <div className="row">
         <div className="col">
      
      <DatePicker 
     
      selected={startDate}
      onChange={ date => setStartDate(date)}
       inline
      />
 
</div>

<div className="col">

      <DatePicker 
      
      placeholderText="End date"
      selected={startDate}
      onChange={ date => setStartDate(date)}
       inline
       
      />
      </div>
      </div>
</div>
</div>
</div>

    )
    }






export default  Takvim;
