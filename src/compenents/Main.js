import React, { Component } from 'react'
import Takvim from './Takvim';
import Talep from './context';
import Anahtar from './Anahtar';

 class Main extends Component {
    render() {
        return(
            <Talep>
                {  // className="rounded float.right" alt="Cinque Terre"
                    value => {
                        const {MainKon,AktifKul} = value;
                       // const {kisiler} =value;
                      // const isim = kisiler[0].name;//****************** */
                       //console.log(isim);
                       const resimyolu = "/pictures/" + AktifKul + ".jpg";
                      
                       
        return (

            <div className={MainKon ? "d-block" : "d-none"}>
            <div className="container p-1 my-1 bg-dark text-white">
            <h2 className="text-center">MAIN PAGE</h2>
            </div>

            <div className = "col-md-16 mb-4">
            <div className = "card">
            <div className = "card-header d-flex justify-content-between">
            <h2 className = "d-inline">{AktifKul} You are the BEST in MARTAŞ </h2>
            <img src={ resimyolu } width="130" height="130" alt={AktifKul}></img>
            </div>
            </div>
            </div>

        


            <div className="container p-1 my-3 bg-dark text-white">
            <Anahtar />
            <div className= 'col-md-16 mb-4 float.left'>
            <Takvim />
            </div>
            </div>
         </div>
             

            
        )
    }
 }

</Talep>
        )
    }
 }
export default Main;