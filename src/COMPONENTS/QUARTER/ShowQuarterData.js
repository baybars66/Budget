import React, { Component } from 'react'
import Talep from '../context';
import axios from 'axios';
import ShowQuaDataDetail from './ShowQuaDetail';

class ShowQuarterData extends Component {

    state ={

        AnahtarKonum:"YES",
        Other:"",
        Liste:[{}],
        EST:"",
        REAL:"",
        peri:"Q1",
        

    }


 componentDidMount=()=>{

 this.QL();
 }

Anahtar = async ()=>{
    const {AnahtarKonum} = this.state;
 if(AnahtarKonum==="YES") await this.setState({
     AnahtarKonum: "NO"
    
 });
  else await this.setState({
    AnahtarKonum: "YES"
});

this.QL();

}

Butt = async (e)  =>{
    console.log(e.target.value);
 await this.setState({
 peri: e.target.value 

 });

await this.Totals();
this.QL();

}

Totals = async() =>{
    var wht = {
        
        peri: this.state.peri,

    }
    console.log(wht.peri);
    await axios.post("http://localhost:10066/QT/", wht)
    .then((response)=>{
console.log(response.data);
this.setState({

    EST: response.data.est,
    REAL: response.data.real,

   });
 
    })
 

}


QL= async (e)  =>{
    //console.log(this.state.AnahtarKonum);
    const ne = {

        peri : this.state.peri,
        Est: this.state.AnahtarKonum,
    }
    //console.log(ne);

    await axios.post("http://localhost:10066/QL/", ne)
        .then((response)=>{
        //console.log(response.data);
        var Toplam =0;
        response.data.map(bilgi=>{ 
        Toplam = Toplam + bilgi.gelen;
        return true;/// illa koy diyo bana yoksa sarı hata veriyo
     
        })
    this.setState({
   
        Liste: response.data,
        Toplam:Toplam,
  
       });



//  console.log("Liste buu ", this.state.Liste);

//  console.log("Toplam buu ", this.state.Toplam);

   }
 
);



    
 

}



    render() {
 
        const {Liste, Toplam} = this.state;
        const bilgi= {
            EstKon: this.state.AnahtarKonum,
            Peri: this.state.peri,

        }
        return(
            <Talep>
                {
                    value => {
                    const {ShowQuarterKon} = value;
                    const{EST, REAL} = this.state;

                   
            return (
   
            <div className= {ShowQuarterKon ? "d-block"   : "d-none "}>
               
 
             
               <div className="row d-flex justify-content-around">
              
               <div className="col ">
               <button className="btn btn-sm btn-secondary mt-1 btn-block" value= "Q1" onClick={this.Butt.bind(this)}>Q1</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1  btn-block" value= "Q2"  onClick={this.Butt.bind(this)} >Q2</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1  btn-block" value= "Q3"  onClick={this.Butt.bind(this)}>Q3</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1 btn-block" value= "Q4" onClick={this.Butt.bind(this)} >Q4</button>
               </div>
               <div className="form-group col-5 ">
               <div className="col-2 mt-2 d-flex justify-content-end">
                
                <label  className="switch">
                    <input id="sel2" type="checkbox" onClick={this.Anahtar}></input>
                    <span className="slider round"></span>
                </label>
                </div>
            </div>

               </div>
               <form>
            
            <div className="form-row mt-2">

                <div className="form-group col-7 border border-dark">

                     <div className="form-row d-flex justify-content-center">
                        <h6 className= "text-center"><span className="badge badge-primary text-wrap" >BUSINESS TRIP </span></h6>
                     </div>

                <div className="form-row ">
                        <div className="form-group col">
                        <p className="text-center text-white bg-secondary rounded">Total Budget</p>
                        <p className="text-center text-white bg-secondary rounded" >{EST} €</p>
                        </div>

                         <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded ">Total Expenses</p>
                         <p className="text-center text-white bg-secondary rounded ">{REAL} €</p>
                         </div>

                         <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded">Difference</p>
                         <p className="text-center text-white bg-secondary rounded ">{EST-REAL} €</p>
                         </div>
                </div>
                </div>

                <div className="form-group col-5 border border-dark">
                    <div className="form-row ">
                    <div className="form-group-right col-6 border"> 
                    
                {
                    Liste.map (bilgi=>{
                        return(
                          <div className="text-right">
                          <span className="badge badge-secondary text-wrap" >{bilgi.cat}</span>
                          </div>
                        )

                    })
                
                }

                </div>

                <div className="form-group col-2 border"> 
                {
     
                   Liste.map (bilgi=>{
                        return(
                         <div className="text-right">
                         <span className="badge badge-secondary text-wrap" >{bilgi.gelen}</span>
                         </div>
         
                        )

                    })
                }
                
                </div>

                <div className="form-group-left  col-3 "> 

                {
     
                 Liste.map (bilgi=>{
                     return(
                     <div className="text-left">
                     <span className="badge badge-primary text-wrap" >% {Math.round(bilgi.gelen/Toplam*100)}</span>
                     </div>
                     )   
                  })
                }
                
                </div>

                </div>
                </div>  
                </div>  

                 </form>

                 <ShowQuaDataDetail bilgi={bilgi}/>
                 </div>
                

            )
   
         }
        }

        </Talep>
            )
        }           
}


export default ShowQuarterData;


