import React, { Component } from 'react'
import axios from 'axios';
 
class User extends Component {

    state = {
        gorunum: true,
        visible : false,
        kisiler: [{
        id: "",
        name :"NO CONNECTION",
        pass :""
       
        }
        ]
    }



   tikla = (e) => {
    
      this.setState({
      visible : ! this.state.visible,
     // digerstate :"kötü"
       });
    
   }
gir =(e) => {
        this.setState({
        gorunum : ! this.state.gorunum,
       // digerstate :"kötü"
         });
       console.log(this.state.gorunum);  
}

   verideg = (e) => {
       
       //console.log(e.target.value);
       //console.log(this.state.kisiler[0].pass);
        if (e.target.value === this.state.kisiler[0].pass) {
        this.tikla() } else  console.log("burada") 
       // this.setState({
        //  [e.target.pass] : e.target.value
       // })
     }   
  //butonkapa = (e) =>{document.getElementByclassName("btn btn-primary").style.display="none";}

  dene = async  (e)=> {   
  // const deger = (e.target.value);
  // const baba = await axios.get('http://localhost:5006/kisiler/' + deger);

   const baba = await axios.get('http://localhost:5006/kisiler/' + e.target.value);
   // console.log(deger);
   // console.log(baba.data);
   // console.log(baba.data[0].name);
   // console.log(baba.data[0].pass);
   
  this.setState({
       kisiler : baba.data
    //     //isvisible : ! this.state.isvisible,
    //    // dige

   });
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
      const gorunum = this.state.gorunum;
        return (
         
            <div className={gorunum ? "d-block" : "d-none"}>
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
            <input 
             type="password" 
             className="form-control" 
             id="pwd"
             onChange = {this.verideg}
             
             
             >



            </input>
            </div>
            <div className={visible ? "d-block" : "d-none"}>
            <button type="button" className="btn btn-primary" onClick={this.gir}>Log In</button>
            </div>
            </div>
            </div>
            </div>
            
            )}
        }



export default User;
