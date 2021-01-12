
import React, { Component } from 'react'

import '../CSS/Anahtar.css';
 

 class Anahtar extends Component {

    state = {
        durum : true,
        
       }


    degis = (e)=>{
       this.setState({
        durum : ! this.state.durum

       });
      //console.log(this.state.durum);
       }


    render() {
        const durum = this.state.durum;
        return (
         

            <div className="">{ durum ? "Estimate" : "Realized"}
             
            <div className="mt-2">
               <label  className="switch">{durum}
             
  <input id="sel2" type="checkbox" value = {durum} onClick={this.degis}></input>
  <span className="slider round"></span>
  </label>
 </div>
</div>

        
        )
    }
}

export default Anahtar;





 
// <div className="checkbox">
// <label>
// <input type="checkbox" checked data-toggle="toggle" onChange= {this.degis} data-on="Estimate" data-off="Real" data-onstyle="danger" data-offstyle="success">
// </input>
// </label>
// </div>