import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 class AddCat extends Component {

    state = {
        buton : true,
    }

    KulEkle = async (basla, e) =>{
        
        e.preventDefault();
        const cat = document.getElementById("NewCat").value;
        await axios.post('http://localhost:5006/Cat/Add/' + cat);
        basla();
     
    }

    Sil = async (basla, e)=>{
        console.log(e.target.id);
        await axios.delete('http://localhost:5006/Cat/sil/' + e.target.id);
    
        basla();
         
      
      }
    PasKon =(e)=>{
       
       
        //console.log(this.state.buton);
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
                    const {cat,basla} = value;
                  
                    
        return (
            <div className= {Kon ? "d-block"   : "d-none "}>
            <div>
            <h5>LIST :</h5>
            </div>
            <ul>
            {  
              cat.map( adam =>{
               return( 
                    <li className=  "d-flex justify-content-between" key = {adam.name}> {adam.name} 
                    <i className="fas fa-trash-alt " id ={adam.name} onClick= {this.Sil.bind(this, basla)}> </i>
                    </li>
                   
                      )
              })
            }
          
         



            </ul>
            <h5>ADD CATEGORY :</h5>
           
            <input id ="NewCat" onChange= {this.PasKon}></input>
            <button className="btn btn-primary" disabled= {this.state.buton} onClick ={this.KulEkle.bind(this, basla)}>ADD</button>
            
            
            </div>
        )

        }}

    </Talep>
        )}
}

export default AddCat;