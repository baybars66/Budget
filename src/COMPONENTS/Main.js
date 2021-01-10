import React, { Component } from 'react'
import Takvim from './Takvim';
import Talep from './context';
import Anahtar from './Anahtar';

 class Main extends Component {

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


            <div className="container p-1 my-2 bg-dark text-white">
            <h2 className="text-center">MAIN PAGE</h2>
            
            <div className="d-flex justify-content-between">
            <h3 className="m-3">BAYBARS </h3>
            <h5 className="m-4">You are the BEST in MARTAŞ </h5>
            <img className="rounded m-2" src="./Baybars.jpg" alt="Generic placeholder image" width="100">
              </img> 
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

//<img className="rounded float-left" src={ resimyolu } alt={AktifKul}  ></img>


// <div className="container p-1 my-2 bg-dark text-white">
// <h2 className="text-center">MAIN PAGE</h2>
// <div class="media">
// <div class="media-body">
// <h5 class="mt-3 mb-1">BAYBARS You are the BEST in MARTAŞ </h5>
         
//     </div>
//  <img class="ml-3" src="./Baybars.jpg" alt="Generic placeholder image" width="100"></img>
// </div>
// </div>


//<div className= 'col-md-8 mb-1 '>