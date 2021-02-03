import React, { Component } from 'react'
import Talep from '../context';
import axios from 'axios';
import Sum from './Sum';
//import { isThisQuarter } from 'date-fns';

 class ShowData extends Component {

    state = {
        EstTotal:"",
        RealTotal:"",

        Trans:"",
        Lodging:"",
        Food:"",
        Other:"",

        dugme : false,
        SumKon: false,
        SwitchKon : "YES", 
        ulke:"",
        AnaData: [{
            id:"",
            user: "",
            Depart:"",
            Donus: "",
            Descrip: "",
            Category: "",
            Quantity: "",
            Price: "",
            Amount:""
        }],
    }
    
Work =async()=>{
    if(this.state.SwitchKon==="YES")
     await this.setState({
            SwitchKon: "NO",
            SumKon :false,

     });
      else 
      
     await this.setState({
             SwitchKon: "YES",
             SumKon :false,
 
      });

      this.Goster();
}


Degis = async (e)=>{
    if (e.target.value !=="") {
   await this.setState({
        ulke: e.target.value,
        SumKon :false,
        dugme: true
        
    });
    
    this.Goster();

}

}

Goster = async() =>{
 
    const istek = {
      ulke : this.state.ulke,
      estimate: this.state.SwitchKon
    }
  //console.log(istek);
  await axios.post('http://88.250.131.163:10066/GetData/', istek)
    .then ( (response)=>{
             
          // console.log(response.data);
            this.setState({
                AnaData : response.data,
                dugme: true,

            });
            
    });

    await axios.post('http://88.250.131.163:10066/SUM/', istek)
    .then ( (response)=>{
             
        // console.log(response.data);
         this.setState({
             EstTotal : response.data.EstTotal,
             RealTotal: response.data.RealTotal,

         });
 });

 
}

SumOpen= async ()=>{

    const bilgi = {
        name :this.state.ulke,
        est: this.state.SwitchKon

    }
   // console.log(bilgi);
   const SumReq =await axios.post('http://localhost:10066/DetailSum/', bilgi);
    //const v2 =RealSum.data[0].Sum;
 // console.log(SumReq.data);
  
  //console.log(SumReq.data.SumFood);
   
   await this.setState({
        Trans : SumReq.data.SumTrans,
        Lodging : SumReq.data.SumLodging,
        Food : SumReq.data.SumFood,
        Other : SumReq.data.SumOther,

        SumKon: !this.state.SumKon,

    });
    
     

}


Sil = async (e)=>{
        const ulke =document.getElementById("ulkeler").value;
        const silinecek ={
            id: e.target.id,
            ulke: ulke
        };
      // console.log(silinecek);
        await axios.post('http://localhost:10066/Data/sil/', silinecek)
        .then ( (response)=>{
             console.log(response.data);
             this.Goster();
     
        });
 
}

  

    render() {
     const {AnaData, SwitchKon, dugme} = this.state;
     const SumData = {
            SumKon:this.state.SumKon,
            ulke: this.state.ulke,
            Trans: this.state.Trans,
            Lodging:this.state.Lodging,
            Food: this.state.Food,
            Other: this.state.Other,
            EstTotal:this.state.EstTotal,
            RealTotal: this.state.RealTotal,
        }


        return(
            <Talep>
                {
                    value => {
                    const {ShowDataKon, country} = value;
                    const resimyolu = "/pictures/Flags/" + this.state.ulke + ".jpg";
                                     
        return (

            <div className= {ShowDataKon ? "d-block"   : "d-none "}>
            
         
          
            <div className="row ">
            <div className="col-4">
                
            <img className="rounded float-left"
                    src={ resimyolu } alt={this.state.ulke}  ></img>
                      
            </div>    
            <div className="col-2d-flex justify-content-end">
            
            <div className= {dugme ? "d-block"   : "d-none "}>
            <button className="btn btn-sm btn-primary mt-3" onClick ={this.SumOpen}>SUM</button>
            </div>
            </div>
            <div className="col-2 d-flex justify-content-end">
            <div></div>
            
                <div>{ SwitchKon==="YES" ? "Estimate" : "Realized"}
                
                <div>
             
                </div>
             
           
                    <label  className="switch">
                    <input id="sel2" type="checkbox" onChange={this.Work}></input>
                    <span className="slider round"></span>
                  

                    </label>
                    
                    </div>
                    </div>
            <div className="col">
            <label htmlFor="ulkeler">Select list:</label>
            <select className="form-control form-control-sm" id="ulkeler" onChange = {this.Degis}  >   
            <option></option>
            {  
              country.map( adam =>{
               return( 
                    <option key = {adam.name}> {adam.name}  </option>
                      )
              })
            }
            </select>

            </div>
          <div>






          <Sum  SumData={SumData}/>
          </div>
            <div>
          
            <table className="table table-striped">
            <thead>
            <tr>
                <th scope= "col">User</th>
                <th scope= "col">Depart</th>
                <th scope= "col">Return</th>
                <th scope= "col">Descrip</th>
                <th scope= "col">Category</th>
                <th scope= "col">Quantity</th>
                <th scope= "col">Price</th>
                <th scope= "col">Amount</th>
                <th scope= "col">Delete</th>

            </tr>
            
            </thead>
            <tbody>

           
            {  
              AnaData.map( bilgi =>{
               return( <tr key= {bilgi.id}>
                 
                <th scope="row">{bilgi.User}</th> 
               
                    <td> 
                        { ( () =>{
                                var hadi = bilgi.Depart;
                                var yil = hadi.substring(0,4);
                                var ay = hadi.substring(5,7);
                                var gun = hadi.substring(8,10);
                                var zaman = gun+"." +ay +"."+ yil ;
                               return (zaman);
                        
                             })()
                        } 
                    </td> 

                    <td>  
                        { ( () =>{
                                var hadi = bilgi.Depart;
                                var yil = hadi.substring(0,4);
                                var ay = hadi.substring(5,7);
                                var gun = hadi.substring(8,10);
                                var zaman = gun+"." +ay +"."+ yil ;
                               return (zaman);
                        
                             })()
                        } 
                    
                    </td> 
                    <td> {bilgi.Descrip} </td> 
                    <td> {bilgi.Category} </td> 
                    <td> {bilgi.Quantity} </td> 
                    <td> {bilgi.Price} </td> 
                    <td> {bilgi.Amount}</td> 
                    <td> <i className="fas fa-trash-alt " id ={bilgi.id}   onClick= {this.Sil}> </i></td> 
                    </tr>
                      )
                      
              })
            }
          
           </tbody>
           </table>

         



            </div>
            </div>
           
            
            
            </div>
        )

        }}

    </Talep>
        )}
}

export default ShowData;