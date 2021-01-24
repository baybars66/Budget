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
        return{
         ...state,
         kisiler :[...state.kisiler,action.payload]
        }
    case "ToMain" : 
        return{
          ...state,
          LoginKon: false,
          MainKon: true,
          PanelKon: true,
          DataKon: false,
          ConfigKon: false,
          ShowDataKon: false,
        }
    case "AktifKul" : 
        return{
           ...state,
           AktifKul : action.payload
        }
    case "Bukon" : 
        return{
           ...state,
           ButtKon : action.payload
        }

    case "gidis" : 
        return{
           ...state,
           startDate : action.payload
        }

    case "DataPageOpen" : 
        // console.log('burada')
        return{
           ...state,
           DataKon : action.payload,
           PanelKon : false
        }
    case "ConfigPageOpen" : 
        // console.log('burada')
        return{
           ...state,
           ConfigKon : action.payload,
           PanelKon : false
        }
    case "ShowPageOpen" : 
        // console.log('burada')
        return{
           ...state,
           ShowDataKon : action.payload,
           PanelKon : false
        }
    default: //console.log('değil')
        return state

 }

}


export class Arz extends Component {
    
    state = {
        kisiler : [
          {
         
          name : "Yo Connection",
          pass: ""
   
          }
        ],


        country : [{
            
            name:""
        }],

        cat : [{
          
            name:""
        }],

        desc : [{
           
            name:""
        }],
        
        AnaData: [{
            user: "",
            Depart:"",
            Donus: "",
            Descrip: "",
            Category: "",
            Quantity: "",
            Price: "",
            Amount:""
        }],

        startDate : new Date(),
        endDate : null,

     

        AktifKul : "NoConn",

        LoginKon : true,

        MainKon : false,

        DataKon: false,

        PanelKon: false,

        ConfigKon: false,

        ShowDataKon: false,

        basla : async () =>{
            console.log("burda");
             //  const adamlar = await axios.get("http://88.250.131.163:10066/kisiler");
             const adamlar = await axios.get("http://localhost:10066/kisiler");
                // .then(resp=>{
                //     console.log(resp);
                // })
                // .catch(err =>{
                //     console.error(err);
                // });
              const ulkeler = await axios.get("http://localhost:10066/Country");
               const cats = await axios.get("http://localhost:10066/Cat"); 
               const descs = await axios.get("http://localhost:10066/Desc"); 
                this.setState({
                   kisiler : adamlar.data,
                   country : ulkeler.data,
                   cat : cats.data,
                   desc : descs.data
                });
        },

        
        dispatch : action => {
                this.setState(state => reducer(state, action))

        }
    }

componentDidMount = () =>{
     this.state.basla();
      
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