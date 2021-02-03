import React, { Component } from 'react'
import Talep from '../context';
import AddUser from './AddUser';
import AddDesc from './AddDesc';
import AddCat from './AddCat';
import AddCountry from './AddCountry';


 class Config extends Component {

    state = {
        user: [{id : "", name :"" }],

        AddUserKon: false,
        AddCatKon : false,
        AddDescKon: false,
        AddCounKon:false,
    
    }
    


Getir = (dispatch, e) =>{
    const is =e.target.value;
    switch (is){
      case "USER": 
        this.setState({
          AddUserKon: true,
          AddCatKon : false,
          AddDescKon: false,
          AddCounKon:false,
          
        });
      break;
      case "DESCRIPTION": 
        dispatch({type:"AddDescPageOpen", payload:true});
        this.setState({
          AddUserKon: false,
          AddCatKon : false,
          AddDescKon: true,
          AddCounKon:false,
        });
      break;
      case "CATEGORY": 
        this.setState({
          AddUserKon: false,
          AddCatKon : true,
          AddDescKon: false,
          AddCounKon:false,
        });
      break;
      case "COUNTRY": 
        this.setState({
          AddUserKon: false,
          AddCatKon : false,
          AddDescKon: false,
          AddCounKon: true,
          
        });
      break;
      case "": 
        this.setState({
          AddUserKon: false,
          AddCatKon : false,
          AddDescKon: false,
          AddCounKon:false,
          
        });
      break;
      default :
        this.setState({
          AddUserKon: false,
          AddCatKon : false,
          AddDescKon: false,
          AddCounKon:false,
          
        });
          // console.log(this.state.Con);

    }

  }


  render() {
       const {AddCounKon, AddCatKon, AddDescKon, AddUserKon}= this.state;

         return(
        <Talep>
            {
                value => {
                const {ConfigKon, dispatch} = value;
            
           return (
         
            <div className= {ConfigKon ? "d-block container-fluid"  : "d-none container-fluid"} >

            <div className="container-fluid p-1 my-3 bg-secondary text-white">
            <h4 className="text-center">CONFIG PANEL</h4>
            
            
            <form>
            <div className="form-group">
            
            
            <select className="form-control" id="ConSel1" onChange = {this.Getir.bind(this, dispatch)} >   
            <option></option>
            <option>USER</option>
            <option>DESCRIPTION</option>
            <option>CATEGORY</option>
            <option>COUNTRY</option>
            </select>
            
            <div >
            <AddUser Kon={AddUserKon}/>
            <AddDesc Kon={AddDescKon} />
            <AddCat Kon={AddCatKon} />
            <AddCountry Kon={AddCounKon} />
      
            </div>
            </div>

            </form>
           
          </div>
          </div>
          
          )}
      }
   
     </Talep>

   )}
      }

export default Config;

