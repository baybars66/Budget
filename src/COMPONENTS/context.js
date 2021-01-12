import React, { Component } from 'react'
import axios from 'axios';

const Contextim = React.createContext();

const reducer = (state, action) => {
 switch (action.type){
   case "sil" : 
     // console.log('burada')
       return{
           ...state,
           kisiler: state.kisiler.filter( kisi=> action.payload !== kisi.id)
         
       }
       case "ekle" : 
       // console.log('burada')
         return{
             ...state,
             kisiler :[...state.kisiler,action.payload]
           
         }

         case "ToMain" : 
         // console.log('burada')
           return{
               ...state,
               LoginKon: false,
               MainKon: true
               
        
             
           }
  
         
           case "AktifKul" : 
           // console.log('burada')
             return{
                 ...state,
                AktifKul : action.payload
          
               
             }
    
       default: //console.log('değil')
           return state
 }

}


export class Arz extends Component {
    
    state = {
        kisiler : [
          {
          id : "1",
          name : "bbbb",
          salary : "",
          dep : ""
   
          }
   
           
 
        ],

        AktifKul : "",

        LoginKon : true,

        MainKon : false,

        DataKon: false,




         dispatch : action => {
                this.setState(state => reducer(state, action))


         }


     }

     componentDidMount = async () =>{
         //  console.log('ilk mi');
  // const {dispatch}=this.props;
  const adamlar = await axios.get("http://localhost:5006/kisiler");
   
  // console.log(adamlar.data);
  this.setState({
     kisiler : adamlar.data
    });
  

     }



    render() {
        return (
            <Contextim.Provider value = {this.state}>
               {this.props.children} 

            </Contextim.Provider>
        )
    }
}
 
const Talep = Contextim.Consumer;
export default Talep;