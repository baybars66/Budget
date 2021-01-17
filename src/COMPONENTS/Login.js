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
   //const {dispatch}=this.props;
   //dispatch({type:"AktifKul", payload:this.AktifKul});
  }

  // SubKon = (e)=> { 
  //  // e.preventDefault();
  //   const Kon= this.state.ButonKon;
  //   console.log("bu");
  //   console.log(Kon);
  //   Kon ? console.log(Kon)  : console.log(Kon)

  // }
  
  componentDidMount = (e) =>{
    //  console.log('login açıldı');
    //  console.log(this.state.AktifKul);
    }

 componentDidUpdate = (e)=>{
   
  //console.log('Update');
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

            <div className="container-fluid">
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
