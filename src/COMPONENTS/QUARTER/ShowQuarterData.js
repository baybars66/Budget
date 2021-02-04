import React, { Component } from 'react'
import Talep from '../context';
import axios from 'axios';
import ShowQuaDataDetail from './ShowQuaDetail';

class ShowQuarterData extends Component {

    state ={

        AnahtarKonum:"YES",
        Other:"",
        Liste:[{cat: "",gelen:1}],
        EST:"",
        REAL:"",
        peri:"Q1",
        Paket:[],
        

    }


 componentDidMount=()=>{
 console.log("Qua didmount");
 //this.QL();
 }

    Anahtar = async ()=>{
     const {AnahtarKonum} = this.state;
        if(AnahtarKonum==="YES") await this.setState({
         AnahtarKonum: "NO"
    
        });
         else await this.setState({
        AnahtarKonum: "YES"
        });

    //this.QL();
    this.TumFonk();

}

Butt = async (e)  =>{
    //console.log(e.target.value);
 await this.setState({
 peri: e.target.value 

 });

//await this.Totals();
//this.QL();

this.TumFonk();
}

// Totals = async() =>{
//     var wht = {
        
//         peri: this.state.peri,

//     }
//     console.log(wht.peri);
//     await axios.post("http://localhost:10066/QT/", wht)
//     .then((response)=>{
//     console.log(response.data);

//     this.setState({

//     EST: response.data.est,
//     REAL: response.data.real,
//    });
//     })
// }

// QL= async (e)  =>{
//     //console.log(this.state.AnahtarKonum);
//     var Toplam =0;
//     var veri=[];
//     const ne = {

//         peri : this.state.peri,
//         Est: this.state.AnahtarKonum,
//     }
//     //console.log(ne);

//     await axios.post("http://localhost:10066/QL/", ne)
//         .then((response)=>{
//         //console.log(response.data);
//         veri=response.data;
//         veri.map((tilki)=>{ 
//         Toplam = Toplam + tilki.gelen;
//         var key= tilki.gelen;
//         //return true;/// illa koy diyo bana yoksa sarı hata veriyo
//         return (key);
//         })

//    }
 
// );
// this.setState({
   
//     Liste: veri,
//     Toplam:Toplam,

//    });
// }



TumFonk= async(e)=>{
    var Toplam =0;
    var veri=[];
    var geldi=[];
    var Paket=[];
    const ne = {
        peri : this.state.peri,
        Est: this.state.AnahtarKonum,
    };

    var wht = {
        peri: this.state.peri,
    };

    await axios.post("http://localhost:10066/QL/", ne)
        .then((geldi)=>{
        //console.log(response.data);
        veri=geldi.data;
        veri.map((tilki)=>{ 
        Toplam = Toplam + tilki.gelen;
        var key= tilki.gelen;
        //return true;/// illa koy diyo bana yoksa sarı hata veriyo
        return (key);
        })

        }
 
    );

    console.log(wht.peri);

    await axios.post("http://localhost:10066/QT/", wht)
    .then((response)=>{
        console.log(response.data);
        geldi=response.data;

    });

   

    //console.log("Quarterdatdetail açıldı");
    await axios.post("http://localhost:10066/QDETLIST/", ne)
    .then((cevap)=>{
    //console.log(response.data);
 
        Paket= cevap.data;

 
    });


    this.setState({

        EST: geldi.est,
        REAL: geldi.real,
        Liste: veri,
        Toplam:Toplam,
        Paket:Paket,

    });






}


    render() {
 
        console.log("Qua baslık renderdayım");
        const {Liste, Toplam, Paket} = this.state;
        const bilgi= {
            EstKon: this.state.AnahtarKonum,
            Peri: this.state.peri,

        }
        //console.log("Liste ", Liste);
        //console.log("Paket", Paket);
        //console.log("bilgi= ", bilgi);
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
                    <div className="form-group-right col-6"> 
                    
                {
                    Liste.map((yoyo)=>{
                      
                        return(<div key={yoyo.cat}>
                          <div className="text-right" >
                          <span className="badge badge-secondary text-wrap" key={yoyo.cat}>{yoyo.cat}</span>
                          </div>
                       </div>

                        )

                    })
                
                }

                </div>


<div className="form-group col-2 border"> 
{

   Liste.map ((veri)=>{
   
        return(
         <div className="text-right"  >
         <span className="badge badge-secondary text-wrap" key ={veri.gelen}>{veri.gelen}</span>
         </div>

        )

    })
}

</div>


<div className="form-group-left  col-3 "> 

{

 Liste.map ((dede)=>{
    
     return(
     <div className="text-left" >
     <span className="badge badge-primary text-wrap" key ={dede.cat} >% {Math.round(dede.gelen/Toplam*100)}</span>
     </div>
     )   
  })
}

</div>







                </div>
                </div>  
                </div>  

                 </form>


<div>
          
<ShowQuaDataDetail bilgi={bilgi} Paket={Paket}/>

          </div>


              
                 </div>
                

            )
   
         }
        }

        </Talep>
            )
        }           
}


export default ShowQuarterData;















//<ShowQuaDataDetail bilgi={bilgi}/>



// <table className="table table-striped">
// <thead>
// <tr>
//     <th scope= "col">Description</th>
//     <th scope= "col">Category</th>
//     <th scope= "col">Quantity</th>
   
//     <th scope= "col">Amount</th>
   

// </tr>

// </thead>
// <tbody>



//  {  
 
//      Paket.map( (bilgi) =>{
//       return( <tr key= {bilgi.Descrip}>
        
//        <th scope="row">{bilgi.Descrip}</th> 
      
          
//            <td> {bilgi.Category} </td> 
//            <td> {bilgi.Quan} </td> 
//            <td> {bilgi.Sum}</td> 
         
//            </tr>
//              )
             
//      })
//    }



// </tbody>
// </table>


