import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 class AddUser extends Component {
    state = {
        buton : false,
    }

    KulEkle = (e) =>{
        
        e.preventDefault();
        console.log("tıkladım");
        

    }
    Sil = async (basla, e)=>{
        console.log(e.target.id);
          const dede = await axios.delete('http://localhost:5006/kisiler/sil/' + e.target.id);
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
                    const {AddUserKon,kisiler,basla} = value;
                    //console.log(AddUserKon);
                    
        return (
            <div className= {AddUserKon ? "d-block"   : "d-none "}>
             <h5>List :</h5>
            <ul>
            {  
              kisiler.map( adam =>{
               return( 
                    <li className=  "d-flex justify-content-between" key = {adam.id}> {adam.name} 
                    <i className="fas fa-trash-alt " id ={adam.id} onClick= {this.Sil.bind(this, basla)}> </i>
                    </li>
                   
                      )
              })
            }
          
         



            </ul>
            <h5>ADD USER</h5>
            <input></input>
            <input onChange= {this.PasKon}></input>
            <button className="btn btn-primary" disabled= {this.state.buton} onClick ={this.KulEkle}>ADD</button>
           
            </div>
        )

        }}

    </Talep>
        )}
}

export default AddUser;