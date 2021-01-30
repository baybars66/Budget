import React, { Component } from 'react'
import DatePicker, { registerLocale }  from "react-datepicker";
import axios from 'axios';
import Talep from './context';

import tr from "date-fns/locale/tr"; // the locale you want
import "react-datepicker/dist/react-datepicker.css";
 
import '../CSS/Anahtar.css';

registerLocale("tr", tr); // register it with the name you want

 class Data extends Component {
 
    state = {
       
        butonyazi: "ADD",
        butonrengi: "btn btn-primary",

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
     }

onChange = (e) => {
    ;
   // console.log(e[0].toISOString().slice(0, 10));
   // console.log(e[0].toLocaleDateString('en-US'));
    var bir =e[0].toISOString().slice(0, 10);
    var iki ="";
    if (e[1] != null) iki =e[1].toISOString().slice(0, 10);
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
}
      
Ekle = async (AktifKul, e)=> {
    this.setState({
        butonyazi: "RUNING",
        butonrengi: "btn btn-danger",

    });  

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
         await axios.post('http://localhost:10066/AddData/', this.state.bilgi)
         .then ( (response)=>{
            console.log(response);
            if (response.status ===200)
              this.setState({
                  butonrengi: "btn btn-success",
                  butonyazi: "OK"
              });
              else
              this.setState({
                butonrengi: "btn btn-danger",
                butonyazi: "ERROR"
            });
      })
      .catch( (err)=>{
          console.log(err);

      });
        
      
}

work = (e)=>{
       this.setState({
        estimate : ! this.state.estimate
           
        });
}

render() {
    const {estimate,startDate, endDate} = this.state;
    return(
            <Talep>
                {  
                    value => {
                        const {DataKon, AktifKul,desc, cat,country} = value;
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
                        dateFormat=""
                        inline
                     />
                    </div>
                     </div>
                    <div className = 'row'>
                    <div className='col d-flex align-items-end flex-column p-2'>  
                    <button type="button" className={this.state.butonrengi} onClick={this.Ekle.bind(this, AktifKul)}>{this.state.butonyazi}</button>
                    </div>
                    </div>
                     </div>

                    </div> 

                    </div>
                    </div>
     
                )}
            }

        </Talep>
        )}
 }

export default Data;
