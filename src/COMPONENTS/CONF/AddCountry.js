import React, { Component } from 'react'
import Talep from '../context';
import axios from 'axios';

 class AddCountry extends Component {
    state = {
        buton : true,
    }

    KulEkle = async (basla, e) =>{
        
        e.preventDefault();
        const kul = document.getElementById("NewCount").value;
        console.log("tıkladım");
        await axios.post('http://88.250.131.163:10066/Country/Add/' + kul);
        basla();
     
    }

    Sil = async (basla, e)=>{
        console.log(e.target.id);
        await axios.delete('http://88.250.131.163:10066/Country/sil/' + e.target.id);
       // dispatch({type:"AktifKul", payload:AktifKul});
        basla();
           
    }

    PasKon =(e)=>{
    
     if (e.target.value === "") 
       this.setState({
        buton : true
     });
      else
        this.setState({
            buton : false
        });
    }


    render() {
         const Kon = this.props.Kon;
        return(
            <Talep>
                {
                    value => {
                    const {country,basla} = value;
                
                    
        return (
            <div className= {Kon ? "d-block"   : "d-none "}>
            <div>
            <h5>LIST :</h5>
            </div>

            <ul className="list-group">
            
            {  
              country.map( adam =>{
               return( 
                    <li className=  "d-flex justify-content-between border border-light" key = {adam.name}> {adam.name} 
                    <i className="fas fa-trash-alt " id ={adam.name} onClick= {this.Sil.bind(this, basla)}> </i>
                    </li>
                   
                      )
              })
            }
          
 
 
            </ul>
            <div></div>
            <h5>ADD COUNTRY :</h5>

            <div className="row">

            <div className="col">
            <input className="form-control"  id ="NewCount" onChange= {this.PasKon}></input>
            </div>

            <div className="col">
            <button className="btn btn-primary" disabled= {this.state.buton} onClick ={this.KulEkle.bind(this, basla)}>ADD</button>
            
            </div>
            
            </div>
            </div>
        )

        }}

    </Talep>
        )}
}

export default AddCountry;