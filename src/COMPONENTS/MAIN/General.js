import React, { Component } from 'react'
import axios from 'axios';
import Gra2 from './Gra2';

class General extends Component {
    state={ 
        EstSum:[{}],
        RealSum:[{}],


    }

componentDidMount=()=>{
    this.General();
}
    General = async () =>{

        const general = await axios.get("http://88.250.131.163:10066/General");
        console.log("AnaPanel General", general.data);
        //console.log("generel funk general", general.data.EstSum[0].name);
       await this.setState({
            EstSum:general.data.EstSum,
            RealSum:general.data.RealSum
        })

    } 


    render() {
        
      const EstSum=this.state.EstSum;
      const {RealSum} =this.state;
 
        return (
            <div className="container">
                      
            <div className="row ">
            <div className="col-4">
            <table className="table table-sm table-striped">
            <thead>
            <tr>
                <th className= "bg-danger" scope= "col">QUARTERS</th>
                <th className= "bg-danger" scope= "col">ESTIMATION</th>
            </tr>
            
            </thead>
            <tbody>

            {  
              EstSum.map( bilgi =>{
               return( <tr key= {bilgi.name}>
                <th scope="row">{bilgi.name}</th> 
                <td> {bilgi.value} </td> 
                </tr>
                )
              })
            }

          
           </tbody>
           </table>
           </div>
           <div className="col-4">
           <Gra2 data={EstSum}/>
           </div>

           <div className="col-4">
            <table className="table table-sm table-striped">
            <thead>
            <tr>
                <th className= "bg-primary" scope= "col" text ="white">QUARTERS</th>
                <th className= "bg-primary" scope= "col">REAL</th>
            </tr>
            
            </thead>
            <tbody>

            {  
              RealSum.map( bilgi =>{
               return( <tr key= {bilgi.name}>
                <th scope="row">{bilgi.name}</th> 
                <td> {bilgi.value} </td> 
                </tr>
                )
              })
            }

          
           </tbody>
           </table>
           </div>
           <div className="col-4">
           <Gra2 data={RealSum}/>
           </div>

            </div>

            </div>

           
        )
    }
}

export default General;