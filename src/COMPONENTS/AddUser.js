import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 class AddUser extends Component {
    state = {
        buton : false,
        yenikul: {
                 name :"",
                 pass : ""
        }
    }
    Oku = (e)=>{
        e.preventDefault();

        console.log(this.state.yenikul);
    }
    KulEkle = async (basla, e) =>{
        
        e.preventDefault();
       
        const kul = document.getElementById("NewKul").value;
        const pass = document.getElementById("Password").value;
       
     await this.setState({
           yenikul: {
            ...this.state.yenikul,
            name: kul,
            pass: pass

           }
        });
       
        console.log(this.state.yenikul);
        console.log(kul, pass);
        //const nine = await axios.post('http://localhost:5006/Desc/Add/' + kul);
        const nine = await axios.post('http://localhost:5006/Kull/Add/', this.state.yenikul);
        basla();
     
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
                    <li className=  "d-flex justify-content-between" key = {adam.name}> {adam.name} 
                    <i className="fas fa-trash-alt " id ={adam.name} onClick= {this.Sil.bind(this, basla)}> </i>
                    </li>
                   
                      )
              })
            }
          
         



            </ul>
            <h5>ADD USER</h5>
            <input id="NewKul" ></input>
            <input id ="Password" onChange= {this.PasKon}></input>
            <button className="btn btn-primary" disabled= {this.state.buton} onClick ={this.KulEkle.bind(this, basla)}>ADD</button>
            <button className="btn btn-primary" disabled= {this.state.buton} onClick ={this.Oku}>Oku</button>
           
            </div>
        )

        }}

    </Talep>
        )}
}

export default AddUser;