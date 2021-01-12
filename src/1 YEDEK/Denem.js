





import React, { Component } from 'react'

import Talep from './context';
import Anahtar from './Anahtar';
import Takvim from './Takvim';
import axios from 'axios';


 class Data extends Component {

    state = {
        durum : true,
        country : [{
            id:"",
            name:""
        }],

        cat : [{
            id:"",
            name:""
        }],

        desc : [{
            id:"",
            name:""
        }]
        
        

        
       }


    work = (e)=>{
       this.setState({
        durum : ! this.state.durum

       });
      //console.log(this.state.durum);
       }

       componentDidMount = async () =>{
        //  console.log('ilk mi');
 // const {dispatch}=this.props;
 const ulkeler = await axios.get("http://localhost:5006/Country");
 const cats = await axios.get("http://localhost:5006/Cat"); 
 const descs = await axios.get("http://localhost:5006/Desc"); 
 // console.log(adamlar.data);
 this.setState({
    country : ulkeler.data,
    cat : cats.data,
    desc : descs.data

   });

 

    }





    render() {
        const {country, cat,desc} = this.state;
        // const durum = this.state.durum;
        // const cat = this.state.cat;
        // const desc = this.state.desc;
        return(
            <Talep>
                {  // className="rounded float.right" alt="Cinque Terre"
                    value => {
                        const {DataKon,AktifKul} = value;
                        const resimyolu = "/pictures/" + AktifKul + ".jpg";
                       // const {kisiler} =value;
                      // const isim = kisiler[0].name;//****************** */
                       //console.log(isim);
                      
                      
                       
        return (

            <div className={DataKon ? "d-block" : "d-none"}>


           


            <div className="container-fluid p-1 my-3 bg-dark text-white">
             
            <div className="d-flex justify-content-start">
            <h5 className="">{AktifKul} </h5>
            
            <img className="rounded float-left" src={ resimyolu } alt={AktifKul}  ></img>
         
            <Takvim />  
            </div>



         
            <form>
          
     
       
      
            <div className="form-row">
        
            <div className= 'col'>
            <Anahtar />  
            </div>

            <div className= 'col'>
            <label htmlFor="sel3">Country</label>
            <select className="custom-select mr-md-3" size="0" id="sel3" >   
            <option></option>
            {  
            country.map( adam =>{
              
                return( 
                    
                    <option key = {adam.name}> {adam.name}  </option>

                    )
                }
                )
            }

            </select>
            </div>

            <div className= 'col'>
            <label htmlFor="sel5">Descrip</label>
            <select className="custom-select mr-md-3"  id="sel5" >   
            <option></option>
            {  
            desc.map( desss =>{
              
                return( 
                    
                    <option key = {desss.name}> {desss.name}  </option>

                    )
                }
                )
            }



            </select>
            </div>

            <div className= 'col'>
            <label htmlFor="sel4">Category</label>
            <select className="custom-select mr-md-3"  id="sel4" >   
            <option></option>

            {  
            cat.map( cats =>{
              
                return( 
                    
                    <option key = {cats.name}> {cats.name}  </option>

                    )
                }
                )
            }


            </select>
            </div>


            <div className= 'col'>
          
            <label htmlFor="quan">Quantity</label>
            <input 
             type="text" 
             className="form-control" 
             id="quan"
             onChange = {this.PassKon}></input>
 </div>
            <div className= 'col'>
            <label htmlFor="price">Price</label>
            <input 
             type="text" 
             className="form-control" 
             id="price"
             onChange = {this.PassKon}></input>
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
export default Data;

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