import React, { useState} from 'react'
import DatePicker, { registerLocale }  from "react-datepicker";
import tr from "date-fns/locale/tr"; // the locale you want
import "react-datepicker/dist/react-datepicker.css";

import '../CSS/Takvim.css';
registerLocale("tr", tr); // register it with the name you want




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

     
     
       
        <div>
       
        <DatePicker 
       
         selected={startDate}
         onChange={onChange}
         startDate={startDate}
         endDate={endDate}
         locale = "tr"
       
         selectsRange
       
         dateFormat="dd/MM/yyyy"
         inline
         />
         
         </div>
        
        
         


    )
    }






export default  Takvim;
