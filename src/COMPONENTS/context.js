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
          MainKon: true,
          PanelKon: true,
          DataKon: false,
          ConfigKon: false,
          ShowDataKon: false,
        }
    case "AktifKul" : 
        // console.log('burada')
        
        return{
           ...state,
           AktifKul : action.payload
           
        }
        case "Bukon" : 
        // console.log('burada')
        
        return{
           ...state,
           ButtKon : action.payload
           
        }

    case "gidis" : 
        // console.log('burada')
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
                const adamlar = await axios.get("http://localhost:5006/kisiler");
                const ulkeler = await axios.get("http://localhost:5006/Country");
                const cats = await axios.get("http://localhost:5006/Cat"); 
                const descs = await axios.get("http://localhost:5006/Desc"); 
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


    basla = async () =>{
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