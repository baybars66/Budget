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


            <div className="container p-1 my-3 bg-dark text-white">
            
         
            <form>
            <div className="form-row align-items-center">
            

            <div className= 'col-auto'>
            <Anahtar />
            </div>
            <div className= 'col-auto'>
            <label htmlFor="sel1">Select Country</label>
            <select className="custom-select mr-md-3" size="0" id="sel1" >   
            <option>Balkan</option>
            <option>Serbia</option>
            <option>Bulgaria</option>

            </select>
            </div>

            <div className= 'col-auto'>
            <label htmlFor="sel2">Descrip</label>
            <select className="custom-select mr-md-3"  id="sel2" >   
            <option>Yemek</option>
            </select>
            </div>

            <div className= 'col-auto'>
            <label htmlFor="sel3">Category</label>
            <select className="custom-select mr-md-3"  id="sel3" >   
            <option>Food</option>
            </select>
            </div>


            <div className= 'col-auto'>
            <div className="form-group">
            <label htmlFor="quan">Quantity:</label>
            <input 
             type="text" 
             className="form-control" 
             id="quan"
             onChange = {this.PassKon}
             
             
             >



            </input>
            <label htmlFor="price">Price:</label>
            <input 
             type="text" 
             className="form-control" 
             id="price"
             onChange = {this.PassKon}
             
             
             >



            </input>
            </div>
            </div>

            <div className= 'col-auto'>
       
            </div>
           </div> 
        
         </form>
        
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