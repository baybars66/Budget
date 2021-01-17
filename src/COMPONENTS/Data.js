import React, { Component } from 'react'
import DatePicker, { registerLocale }  from "react-datepicker";
import axios from 'axios';
import Talep from './context';
//import axios from 'axios';
import tr from "date-fns/locale/tr"; // the locale you want
import "react-datepicker/dist/react-datepicker.css";
 
import '../CSS/Anahtar.css';

registerLocale("tr", tr); // register it with the name you want

 class Data extends Component {
 
   
    state = {
        

        country : [{
            id:"",
            name:""
        }],
       startDate: new Date(),
       endDate:"",
        estimate: true,
        bilgi : 
            {
            ulke: "",
            kullanici: "", 
            gidis: "",
            donus: "",   
            icerik: "",
            kategory: "",
            adet: "",
            fiyat:"",
            tahimini : "",
            },

        cat : [{
            id:"",
            name:""
        }],

        desc : [{
            id:"",
            name:""
        }]
        
        

        
       }

onChange = (e) => {
     var bir =e[0].toLocaleDateString();
     var iki ="";
    
    if (e[1] != null) iki =e[1].toLocaleDateString();
   
   console.log(bir, iki);
       this.setState({
            startDate: e[0],
            endDate : e[1],

            bilgi: {
                ...this.state.bilgi,
                gidis: bir,
                donus: iki

            }
      
       

    });

    //console.log(bir, iki);
           // console.log(this.state.bilgi); //Güvenme setstate sonrası console
      
      
}
      
       Ekle = async (AktifKul, e)=> {
       // console.log(this.state.bilgi.gidis);
       // e.preventDefault();
      // console.log(AktifKul);
        //|| 
        var est = "";
        if (this.state.estimate) est="YES"; else est ="NO";
       
        await this.setState({
            

            bilgi: {
                 ...this.state.bilgi,
                 ulke : document.getElementById("select1").value,
                 icerik : document.getElementById("select2").value,
                 kategory : document.getElementById("select3").value,
                 adet : document.getElementById("quantity").value,
                 fiyat : document.getElementById("price").value,
                 kullanici: AktifKul,
                 tahmini: est,
                 
                  }
                 
                });
                const {ulke, kullanici, donus, icerik, kategory, adet, fiyat} = this.state.bilgi;
        
                if ((kullanici ==="" || donus ==="" ||  ulke ==="" ||  icerik ==="" ||  kategory ==="" ||  adet ==="" ||  fiyat ==="") ) console.log("boş");     
                 else
                 //console.log(AktifKul);
                 //console.log(ulke, AktifKul, gidis, donus, icerik, kategory, adet, fiyat,estimate  );
                console.log(this.state.bilgi)
              await axios.post('http://localhost:5006/AddData/', this.state.bilgi);
               //basla();
      
    }




    work = (e)=>{
       this.setState({
        
            estimate : ! this.state.estimate
           
       });
      //console.log(this.state.durum);
       }

       componentDidMount =() =>{
      
//  const ulkeler = await axios.get("http://localhost:5006/Country");
//  const cats = await axios.get("http://localhost:5006/Cat"); 
//  const descs = await axios.get("http://localhost:5006/Desc"); 

//  this.setState({
//     country : ulkeler.data,
//     cat : cats.data,
//     desc : descs.data

//    });

 

    }

componentDidUpdate = () =>{



}

    render() {
        const {estimate} = this.state;
        const {startDate, endDate}= this.state;
        // const durum = this.state.durum;
        // const cat = this.state.cat;
        // const desc = this.state.desc;

        return(
            <Talep>
                {  // className="rounded float.right" alt="Cinque Terre"
                    value => {
                        const {DataKon, AktifKul,desc, cat,country} = value;
                       // const {kisiler} =value;
                      // const isim = kisiler[0].name;//****************** */
                       //console.log(isim);
                      
                      
                       
        return (

<div className={DataKon ? "d-block" : "d-none"}>
<div className="container d-flex justify-content-end p-5 my-3 bg-dark text-white">

<div className="row d-flex justify-content-between">


    <div className= 'col'>
        
            <label htmlFor="select1">Country</label>
            <select className="form-control mr-md-3" size="0" id="select1"  >   
            <option></option>
            {  
            country.map( adam =>{
              return( <option key = {adam.name}> {adam.name}  </option>)
                })
            }
            </select>


            <label htmlFor="select2">Descrip</label>
            <select className="form-control mr-md-3"  id="select2"  >   
            <option></option>
            {  
            desc.map( desss =>{
              return( <option key = {desss.name}> {desss.name}  </option>)
                })
            }
            </select>


            <label htmlFor="select3">Category</label>
            <select className="form-control mr-md-3"  id="select3" >   
            <option></option>

            {  
            cat.map( cats =>{
              return( <option key = {cats.name}> {cats.name}  </option>)
                })
            }
            </select>
            <label htmlFor="quantity">Quantity</label>
            <input 
            type="number" 
            className="form-control" 
            id="quantity"
            onChange = {this.PassKon}></input>
            <label htmlFor="price">Price</label>
            <input 
            type="number" 
            className="form-control" 
            id="price"
            onChange = {this.PassKon}></input>
        </div>
        
        <div className='col'>
            <div className = 'row'>
               <div className='col d-flex align-items-end flex-column'>  

            <div className="">{ estimate ? "Estimate" : "Realized"}
            <div className="mt-2">
            <label  className="switch">{estimate}
            <input id="sel2" type="checkbox" value = {estimate} onClick={this.work}></input>
            <span className="slider round"></span>
            </label>
            </div>
            </div>
               </div>
               <div className='col d-flex align-items-end flex-column'>
               <DatePicker
                selected={startDate}
                onChange={this.onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat="yyyy"
                inline
                 />
               </div>
               </div>
            <div className = 'row'>
               <div className='col d-flex align-items-end flex-column p-2'>  
               <button type="submit" className="btn btn-primary" onClick={this.Ekle.bind(this, AktifKul)}>Add</button>
               </div>
            </div>
    </div>

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
export default Data;

//disabled = {!ButonKon} onClick={this.ToMain.bind(this, dispatch)}

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




