import React, { Component } from 'react'
import Talep from './context';
import Grafik from './Grafik'
import axios from 'axios';






 class ShowQuarterData extends Component {

    state ={
        EstSum:"",
        RealSum:"",
        Trans: "",
        Food: "",
        Lodging: "",
        Other:"",


    }



 Q1= async ()  =>{
 
      console.log("Quarter1 Fonk");
      const q1 = await axios.get("http://localhost:10066/Q1");
       this.setState({
        EstSum:q1.data.Q1EstTotal,
        RealSum:q1.data.Q1RealTotal,
        Trans: q1.data.Q1Trans,
        Food: q1.data.Q1Food,
        Lodging: q1.data.Q1Lodging,
        Other: q1.data.Q1Other,
    });


 }


 componentDidMount=()=>{
 this.Q1();
 


 }
 Q2= async ()  =>{
 
    const q1 = await axios.get("http://localhost:10066/Q2");
     this.setState({
      EstSum:q1.data.Q1EstTotal,
      RealSum:q1.data.Q1RealTotal,
      Trans: q1.data.Q1Trans,
      Food: q1.data.Q1Food,
      Lodging: q1.data.Q1Lodging,
      Other: q1.data.Q1Other,

     });

}

Q3= async ()  =>{
 
    const q1 = await axios.get("http://localhost:10066/Q3");
     this.setState({
      EstSum:q1.data.Q1EstTotal,
      RealSum:q1.data.Q1RealTotal,
      Trans: q1.data.Q1Trans,
      Food: q1.data.Q1Food,
      Lodging: q1.data.Q1Lodging,
      Other: q1.data.Q1Other,

     });
    
}



Q4= async ()  =>{
    const ne = {
        peri : "Quarter1"
    }
  await axios.post("http://localhost:10066/QL/", ne)
   .then((response)=>{

    console.log(response);

   }

   );
    
    // const q1 = await axios.get("http://localhost:10066/Q4");
    //  this.setState({
    //   EstSum:q1.data.Q1EstTotal,
    //   RealSum:q1.data.Q1RealTotal,
    //   Trans: q1.data.Q1Trans,
    //   Food: q1.data.Q1Food,
    //   Lodging: q1.data.Q1Lodging,
    //   Other: q1.data.Q1Other,

    //  });

}
//<Grafik width={50} height={50} data={data}/>


    render() {
        //const {AnaData, SwitchKon, dugme} = this.state;
        var {Trans,Lodging,Other,Food}= this.state;
        //const{GiderEU, GiderTL} = this.state;
         if(Trans === null) Trans=0;
         if(Lodging === null) Lodging=0;
         if(Food === null) Food=0;
         if(Other === null) Other=0;
         // else console.log(Trans);
       const Total = Trans +Lodging+Other+Food;
       console.log(Lodging);
       const YuzdeTrans = Math.round(Trans/Total*100);
       const YuzdeLodging = Math.round(Lodging/Total*100);
       const YuzdeFood = Math.round(Food/Total*100);
       const YuzdeOther = Math.round(Other/Total*100);
        const data=[YuzdeTrans, YuzdeLodging, YuzdeFood, YuzdeOther];
       
       
           return(
               <Talep>
                   {
                       value => {
                       const {ShowQuarterKon,desc} = value;
                       const{EstSum, RealSum} = this.state;
                  
                                        
           return (
   
               <div className= {ShowQuarterKon ? "d-block"   : "d-none "}>
               
 
             
               <div className="row d-flex justify-content-around">
              
               <div className="col ">
               <button className="btn btn-sm btn-secondary mt-1 btn-block" onClick={this.Q1}>Q1</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1  btn-block" onClick={this.Q2} >Q2</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1  btn-block" onClick={this.Q3}>Q3</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1 btn-block" onClick={this.Q4} >Q4</button>
               </div>
               <div className="form-group col-5 border">
               
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
                         <p className="text-center text-white bg-secondary rounded" >{EstSum}</p>
                        </div>

                         <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded ">Total Expenses</p>
                         <p className="text-center text-white bg-secondary rounded ">{RealSum} €</p>
                         </div>

                         <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded">Difference</p>
                         <p className="text-center text-white bg-secondary rounded ">{EstSum-RealSum}€</p>
                         </div>
                </div>
                </div>

                <div className="form-group col-5 border border-dark">
                    <div className="form-row ">
                    <div className="form-group-right col-6 border"> 
                    
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Transportation</span></div>
                    <div></div>
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Lodging</span></div>
                    <div></div>
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Food</span></div>
                    <div></div>
                 
                    <div className="text-right"><span className="badge  badge-secondary text-wrap" >Others</span></div>
                    <div></div>
                    </div>
                   

                    <div className="form-group col-2 "> 
                
                    <div className="badge badge-primary text-wrap" >{Trans} €</div>
                    <div className="badge badge-primary text-wrap" >{Lodging} €</div>
                    <div className="badge badge-primary text-wrap" >{Food} €</div>
                    <div className="badge badge-primary text-wrap" >{Other} €</div>
                    </div>


                    <div className="form-group-left  col-3 "> 
<div className="badge badge-secondary text-wrap" >% {YuzdeTrans}</div>
<div className="badge badge-secondary text-wrap" >% {YuzdeLodging}</div>
<div className="badge badge-secondary text-wrap" >% {YuzdeFood}</div>
<div className="badge badge-secondary text-wrap" >% {YuzdeOther}</div>
</div> 


        
                    </div>
                </div>  
            </div>  

            </form>





            </div>

        )
   
    }
}

</Talep>
)
}
}


export default ShowQuarterData;



