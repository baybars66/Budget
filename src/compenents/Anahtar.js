
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
               <h4>{durum ? "ESTIMATE" : "REAL"}</h4>

               <label className="switch">
  <input type="checkbox" value = {durum} onClick={this.work}></input>
  <span className="slider round"></span>
</label>


            </div>
        )
    }
}

export default Anahtar;

