
import React, { Component } from 'react'

import '../CSS/Anahtar.css';
 

 class Anahtar extends Component {

    state = {
        durum : true,
        
       }


    work = (e)=>{
       this.setState({
        durum : ! this.state.durum

       });
      //console.log(this.state.durum);
       }




    render() {
        const durum = this.state.durum;
        return (
            <div>
            <div className="">{ durum ? "Estimate" : "Real"}</div>
             
            <div className="mt-2">
               <label  className="switch">
             
  <input id="sel2" type="checkbox" value = {durum} onClick={this.work}></input>
  <span className="slider round"></span>
  </label>
  </div>

            </div>
        )
    }
}

export default Anahtar;

