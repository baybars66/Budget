import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 class AddDesc extends Component {
    state = {
        buton : false,
    }

    KulEkle = async (basla, e) =>{
        
        e.preventDefault();
        const kul = document.getElementById("YeniKul").value;
        console.log("tıkladım");
        const nine = await axios.post('http://localhost:5006/Desc/Add/' + kul);
        basla();
     
    }

    Sil = async (basla, e)=>{
        console.log(e.target.id);
          const dede = await axios.delete('http://localhost:5006/Desc/sil/' + e.target.id);
       // dispatch({type:"AktifKul", payload:AktifKul});
      
        basla();
          // this.setState({
          //   AktifKul : baba.data[0].name,
          //   Pass : baba.data[0].pass
          // });
      
      
      }
    PasKon =(e)=>{
       
       
        console.log(this.state.buton);
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
        return(
            <Talep>
                {
                    value => {
                    const {AddDescKon,desc,basla} = value;
                    console.log(AddDescKon);
                    
        return (
            <div className= {AddDescKon ? "d-block"   : "d-none "}>
            <div>
            <h5>LIST :</h5>
            </div>
            <ul>
            {  
              desc.map( adam =>{
               return( 
                    <li className=  "d-flex justify-content-between" key = {adam.name}> {adam.name} 
                    <i className="fas fa-trash-alt " id ={adam.name} onClick= {this.Sil.bind(this, basla)}> </i>
                    </li>
                   
                      )
              })
            }
          
         



            </ul>
            <h5>ADD DESCRIPTION :</h5>
            <input className="d-none " disabled = {true} value= "Next"></input>
            <input id ="YeniKul" onChange= {this.PasKon}></input>
            <button className="btn btn-primary" disabled= {this.state.buton} onClick ={this.KulEkle.bind(this, basla)}>ADD</button>
            
            
            </div>
        )

        }}

    </Talep>
        )}
}

export default AddDesc;