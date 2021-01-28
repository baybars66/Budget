import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 
class Login extends Component {

  state = {
        LoginKon: true,
        AktifKul: "Deneme",
        Pass:"",
       
        kisiler: [{
          id: "",
          name :"NO CONNECTION",
          pass :""
         
          }
          ]
        
  }

  ToMain = (dispatch, e) => {

    e.preventDefault();
      const {LoginKon, AktifKul} = this.state;
      var bukon = false;
      if (AktifKul==="Suela")  bukon= true;
       else bukon=false;
    console.log(bukon);
      dispatch({type:"AktifKul", payload:AktifKul});
      dispatch({type:"BuKon", payload:bukon});
      dispatch({type:"ToMain", payload:LoginKon});
  }

  PassKon = (e) => {
    console.log(e.target.getModifierState);
   
    //console.log(e.target.value);
    //console.log(this.state.kisiler[0].pass);
    if (e.target.value === this.state.Pass) {
        //console.log(this.state.ButonKon);
        this.ButonGorun() } else {
          return (null);
         // console.log(this.state.ButonKon);
        } 
    //this.setState({
    //e.target.pass] : e.target.value
    //})
  }   

  ButonGorun = (e) => {
    this.setState({
    ButonKon : ! this.state.ButonKon
    //digerstate :"kötü"
       });
  }
 
  Gir = async (e)=> {   
 
    const baba = await axios.get('http://88.250.131.163:10066/kisiler/' + e.target.value);
  
    this.setState({
      AktifKul : baba.data[0].name,
      Pass : baba.data[0].pass
    });

    const üstüne = function getFocus() {
      document.getElementById("pwd").focus();
    }
    üstüne();

   //const {dispatch}=this.props;
   //dispatch({type:"AktifKul", payload:this.AktifKul});
  }



  render() {
    //  const {LoginKon} = this.state;

      return(
        <Talep>
            {
                value => {
                const {kisiler, LoginKon, dispatch} = value;
                // const {dispatch}=value;        
                //console.log(kisiler);
                //iler = this.state.kisiler;
                //const{kisiler} = this.state.kisiler;
                const ButonKon = this.state.ButonKon;
                //  const gorunum = this.state.gorunum;
           return (
         
            <div className= {LoginKon ? "d-block container-fluid"  : "d-none container-fluid"} >

            <div className="container-fluid p-1 my-3 bg-dark text-white">
            <h1 className="text-center">LOGIN</h1>
            </div>

            <div className="container-fluid ">
            <div className="jumbotron">
            <form>
            <div className="form-group">
            
            <label htmlFor="sel1">Select list:</label>
            <select className="form-control" id="sel1" onChange = {this.Gir}  >   
            <option></option>
            {  
              kisiler.map( adam =>{
               return( 
                    <option key = {adam.name}> {adam.name}  </option>
                      )
              })
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

            <div className={ButonKon ? "d-block" : "d-none"}>

            <button type="submit" className="btn btn-primary" disabled = {!ButonKon} onClick={this.ToMain.bind(this, dispatch)} >Log In</button>
            </div>
            </form>

            </div>
          
            </div>
            </div>
            
            )}
        }
     
       </Talep>

     )}
        }

export default Login;
