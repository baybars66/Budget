import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 class ShowData extends Component {

    state = {
        buton : true,
    }

Goster = async(dispatch, e) =>{
  console.log(e.target.value);
  await axios.get('http://localhost:5006/Data/' + e.target.value);



}
    Sil = async (basla, e)=>{
        console.log(e.target.id);
        await axios.delete('http://localhost:5006/Cat/sil/' + e.target.id);
    
        basla();
         
      
      }
    // PasKon =(e)=>{
       
       
    //     //console.log(this.state.buton);
    //    if (e.target.value === "") 
    //    this.setState({
    //     buton : true
    // });
    //     else
    //     this.setState({
    //         buton : false
    //     });
    // }


    render() {
    
        return(
            <Talep>
                {
                    value => {
                    const {AnaData, country,ShowDataKon, dispatch} = value;
                  
                    
        return (
            <div className= {ShowDataKon ? "d-block"   : "d-none "}>
            <div>
            <h5>LIST :</h5>
            </div>

            <div className="form-group">
            
            <label htmlFor="sel1">Select list:</label>
            <select className="form-control" id="sel1" onChange = {this.Goster.bind(this, dispatch)}  >   
            <option></option>
            {  
              country.map( adam =>{
               return( 
                    <option key = {adam.name}> {adam.name}  </option>
                      )
              })
            }
            </select>
            </div>
           
            
            
            </div>
        )

        }}

    </Talep>
        )}
}

export default ShowData;