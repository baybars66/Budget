import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';


 class Config extends Component {

    state = {
        user: [{
            id : "",
            name :""
        }
        ],

        api : "",

        Consel2 : "",

        Con : false


    }
dene = async (basla, e)=>{
  console.log(e.target.id);
    const dede = await axios.delete('http://localhost:5006/kisiler/sil/' + e.target.id);
 // dispatch({type:"AktifKul", payload:AktifKul});
  basla();
    // this.setState({
    //   AktifKul : baba.data[0].name,
    //   Pass : baba.data[0].pass
    // });


}

Getir = (e) =>{
      const is =e.target.value;
      

      switch (is){
        case "USER": 
             this.setState({
                    Con: true
                });
        break;

        default :
           console.log(this.state.Con);

        }

        // if (e.target.value === "USER"){
        //    this.setState({
        //     Con : true

        //    }); 
        // }
        //    else return(null);

    

        console.log(this.state.Con);

        
    }


    render() {
         return(
        <Talep>
            {
                value => {
                const {ConfigKon, kisiler, basla} = value;
                const {Con} = this.state;
                console.log(Con);
           return (
         
            <div className= {ConfigKon ? "d-block container-fluid"  : "d-none container-fluid"} >

            <div className="container-fluid p-1 my-3 bg-dark text-white">
            <h1 className="text-center">CONFIG PANEL</h1>
            
            
            <form>
            <div className="form-group">
            
            <label htmlFor="ConSel1">Select list:</label>
            <select className="form-control" id="ConSel1" onChange = {this.Getir} >   
            <option></option>
            <option>USER</option>
            <option>DESCRIPTION</option>
            <option>COUNTRY</option>
            <option>CATEGORY</option>
            </select>
            
            <div className= { Con ? "d-block"  : "d-none"}>

            <ul>
            {  
              kisiler.map( adam =>{
               return( 
                    <li className=  "d-flex justify-content-between" key = {adam.id}> {adam.name} 
                    <i className="fas fa-trash-alt " id ={adam.id} onClick= {this.dene.bind(this, basla)}> </i>
                    </li>
                      )
              })
            }




            </ul>



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