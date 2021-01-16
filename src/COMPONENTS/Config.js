import React, { Component } from 'react'
import Talep from './context';
import AddUser from './AddUser';
import AddDesc from './AddDesc'


 class Config extends Component {

    state = {
        user: [{
            id : "",
            name :""
        }
        ],

    }


Getir = (dispatch, e) =>{
      const is =e.target.value;
      

      switch (is){
        case "USER": 
        dispatch({type:"AddUserPageOpen", payload:true});
        break;
        case "DESCRIPTION": 
        dispatch({type:"AddDescPageOpen", payload:true});
        break;

        default :
          // console.log(this.state.Con);

        }

    }


    render() {
         return(
        <Talep>
            {
                value => {
                const {ConfigKon, dispatch} = value;
               
               // console.log(Con);
           return (
         
            <div className= {ConfigKon ? "d-block container-fluid"  : "d-none container-fluid"} >

            <div className="container-fluid p-1 my-3 bg-dark text-white">
            <h2 className="text-center">CONFIG PANEL</h2>
            
            
            <form>
            <div className="form-group">
            
            <label htmlFor="ConSel1">SELECT</label>
            <select className="form-control" id="ConSel1" onChange = {this.Getir.bind(this, dispatch)} >   
            <option></option>
            <option>USER</option>
            <option>DESCRIPTION</option>
            <option>COUNTRY</option>
            <option>CATEGORY</option>
            </select>
            
            <div >
            <AddUser />
            <AddDesc  />

            


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

//onChange={this.Getir.bind(kisiler)}