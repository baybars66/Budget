import React, { Component } from 'react'

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

       default: //console.log('değil')
           return state
 }

}


export class Arz extends Component {
    
    state = {
        kisiler : [
          {
          id : 1,
          name : "",
          salary : "",
          dep : ""
   
          },
   
           
 
        ],
         dispatch : action => {
                this.setState(state => reducer(state, action))


         }


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