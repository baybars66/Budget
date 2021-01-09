import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 
class User extends Component {

    state = {
        LoginKon: true,
        AktifKul: "Deneme",
        Pass:"",
        visible : false,
        kisiler: [{
        id: "",
        name :"NO CONNECTION",
        pass :""
       
        }
        ]
    }




    ToMain = (dispatch, e) => {
      const {LoginKon, AktifKul} = this.state;
     
      console.log(AktifKul);
      dispatch({type:"AktifKul", payload:AktifKul});
      dispatch({type:"ToMain", payload:LoginKon});
  
    }



   PassKon = (e) => {
       
       //console.log(e.target.value);
       //console.log(this.state.kisiler[0].pass);
        if (e.target.value === this.state.Pass) {
        this.Acıl() } else console.log("dede")
       // this.setState({
        //  [e.target.pass] : e.target.value
       // })
     }   

    Acıl = (e) => {
    
    this.setState({
    visible : ! this.state.visible,
   // digerstate :"kötü"
     });
  
 }
 

  Gir = async (e)=> {   
   
  // const deger = (e.target.value);
  // const baba = await axios.get('http://localhost:5006/kisiler/' + deger);
 
   const baba = await axios.get('http://localhost:5006/kisiler/' + e.target.value);
   // console.log(deger);
    //console.log(baba.data);
   // console.log(baba.data[0].name);
   // console.log(baba.data[0].pass);
   
  this.setState({
      AktifKul : baba.data[0].name,
       Pass : baba.data[0].pass
  
   });


  // const {dispatch}=this.props;
  
      
  //     dispatch({type:"AktifKul", payload:this.AktifKul});

  }
  
   componentDidMount = (e) =>{
     // console.log('login açıldı');
    }


    render() {
    //  const {LoginKon} = this.state;

      return(
        <Talep>
            {
                value => {
                const {kisiler, LoginKon} = value;
                const {dispatch}=value;        
                //console.log(kisiler);
               //iler = this.state.kisiler;
                //const{kisiler} = this.state.kisiler;
               const visible = this.state.visible;
              //  const gorunum = this.state.gorunum;
        
      return (
         
            <div className={LoginKon ? "d-block" : "d-none"}>
            <div className="container p-1 my-3 bg-dark text-white">
            <h1 className="text-center">LOGIN</h1>
            </div>
            <div className="container">
            <div className="jumbotron">
            <div className="form-group">
            
            <label htmlFor="sel1">Select list:</label>
            <select className="form-control" id="sel1" onChange = {this.Gir} >   
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
             onChange = {this.PassKon}
             
             
             >



            </input>
         
            </div>
            <div className={visible ? "d-block" : "d-none"}>
            <button type="button" className="btn btn-primary" onClick={this.ToMain.bind(this, dispatch)}>Log In</button>
            </div>
            </div>
            </div>
            </div>
            
            )}
        }
     
       </Talep>

     )}
        }

export default User;
