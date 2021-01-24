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
        await axios.post('http://localhost:10066/Cat/Add/' + cat);
        basla();
     
    }

    Sil = async (basla, e)=>{
        console.log(e.target.id);
        await axios.delete('http://localhost:10066/Cat/sil/' + e.target.id);
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
                    const {cat,basla} = value;
        
        return (
            <div className= {Kon ? "d-block"   : "d-none "}>
            <div>
            <h5>LIST :</h5>
            </div>
            
            <ul className="list-group">

            {  
              cat.map( adam =>{
               return( 
                    <li className=  "d-flex justify-content-between border border-light" key = {adam.name}> {adam.name} 
                    <i className="fas fa-trash-alt " id ={adam.name} onClick= {this.Sil.bind(this, basla)}> </i>
                    </li>
                   
                      )
              })
            }
          
     
            </ul>
            <h5>ADD CATEGORY :</h5>

            <div className="row">

            <div className="col">
            <input className="form-control" id ="NewCat" onChange= {this.PasKon}></input>
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

export default AddCat;