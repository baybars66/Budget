import React, { useState} from 'react'
import DatePicker, { registerLocale }  from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

import '../CSS/Takvim.css';


const Takvim=()=> {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
     const onChange = dates => {
         const [start, end] = dates;
         setStartDate(start);
         setEndDate(end);
     };
     //const startDate = this.state.startDate;
     // const { startDate } = this.state;
     return( 

     
     
       
        <div className="row">
        <div className="col-md-3 mb-4">

        <h4 className="react-datepicker"> Departer & Return </h4>
        <DatePicker 
       
         selected={startDate}
         onChange={onChange}
         startDate={startDate}
         endDate={endDate}
         locale = "en-gb"
       
         selectsRange
         inline
         dateFormat="dd/MM/yyyy"
         />
         </div>

         <div className="col-md-3 mb-4">
         

         </div>
         </div>
        
        
         


    )
    }






export default  Takvim;
