import React, { Component } from 'react'
import axios from 'axios';
 
class User extends Component {

    state = {
        visible : true,

        kisiler: [{
        id: "",
        name :"NO CONNECTION",
        pass :"",
       
        }
        ]
    }



   tikla = (e) => {
    
      this.setState({
      isvisible : ! this.state.isvisible,
     // digerstate :"kötü"
       });
    
   }

  butonkapa = (e) =>{document.getElementByclassName("btn btn-primary").style.display="none";}

  dene = async  (e)=> {
   
  // const deger = (e.target.value);
  // const baba = await axios.get('http://localhost:5006/kisiler/' + deger);

   const baba = await axios.get('http://localhost:5006/kisiler/' + e.target.value);
   // console.log(deger);
    console.log(baba.data);
    console.log(baba.data[0].name);
    console.log(baba.data[0].pass);
    


   }

  
   componentDidMount= async () =>{
  
    const adamlar = await axios.get("http://localhost:5006/kisiler");
   
    // console.log(adamlar.data);
    this.setState({
       kisiler : adamlar.data
        
     });

    
    }


    render() {
        const kisiler = this.state.kisiler;
      //const{kisiler} = this.state.kisiler;
       const visible = this.state.visible;
        return (
         
            <div>
            <div className="container p-1 my-3 bg-dark text-white">
            <h1 className="text-center">LOGIN</h1>
            </div>
            <div className="container">
            <div className="jumbotron">
            <div className="form-group">
             
            <label htmlFor="sel1">Select list:</label>
            <select className="form-control" id="sel1" onChange = {this.dene} >   
            <option></option>
            {  
            kisiler.map( adam =>{
              
                return( 
                    
                    <option key = {adam.name}> {adam.name}  </option>

                    )
                }
                )
            }

            </select>
            </div>
            <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd"></input>
            </div>
            <div className={visible ? "d-block" : "d-none"}>
            <button type="button" className="btn btn-primary" >Log In</button>
            </div>
            </div>
            </div>
            </div>
            
            )}
        }



export default User;
