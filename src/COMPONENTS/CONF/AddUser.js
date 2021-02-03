import React, { Component } from 'react'
import Talep from '../context';
import axios from 'axios';

 class AddUser extends Component {
    state = {
        box : true,
        buton : true,
        yenikul: {
                 name :"",
                 pass : ""
        }
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
        //console.log(this.state.yenikul);
        await axios.post('http://88.250.131.163:10066/Kull/Add/', this.state.yenikul);
        basla();
     
    }

    Sil = async (basla, e)=>{
        console.log(e.target.id);
        await axios.delete('http://88.250.131.163:10066/kisiler/sil/' + e.target.id);
        basla();
        
    }
    
    NameKon =(e)=>{
        //console.log(this.state.buton);
        if (e.target.value === "") 
        this.setState({
        box : true
         });
        else
        this.setState({
            box : false
        });
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
                    const {kisiler,basla} = value;
                    //console.log(AddUserKon);
                    
        return (
            <div className= {Kon ? "d-block"   : "d-none "}>
            <h5>List :</h5>
            <ul className="list-group">
            {  
              kisiler.map( adam =>{
                 return( 
                    <li className=  "d-flex justify-content-between border border-light" key = {adam.name}> {adam.name} 
                    <i className="fas fa-trash-alt " id ={adam.name} onClick= {this.Sil.bind(this, basla)}> </i>
                    </li>
                  )
              })
            }
            </ul>
            <h5>ADD USER</h5>
            <div className="row">
            <div className="col">
            <input className="form-control" id="NewKul" onChange= {this.NameKon}></input>
            </div>
            <div className="col">
            <input className="form-control"id ="Password" onChange= {this.PasKon} disabled= {this.state.box} ></input>
            </div>
            <div className="col">
            <button className="btn btn-primary" 
            disabled= {this.state.buton} 
            onClick ={this.KulEkle.bind(this, basla)}>
            ADD</button>
            </div>
            </div>
            </div>
        )

        }}

     </Talep>

    )}
}

export default AddUser;