import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';





 class ShowQuarterData extends Component {

    state ={
        EstSum:"",
        RealSum:"",

    }



 Q1= async ()  =>{
      console.log("Quarter1 Fonk");
      const q1 = await axios.get("http://localhost:10066/Q1");
       this.setState({
        EstSum:q1.data.Q1EstTotal,
        RealSum:q1.data.Q1RealTotal


       });



 }


    render() {
        //const {AnaData, SwitchKon, dugme} = this.state;
     
   
           return(
               <Talep>
                   {
                       value => {
                       const {ShowQuarterKon} = value;
                       const{EstSum, RealSum} = this.state;
                  
                                        
           return (
   
               <div className= {ShowQuarterKon ? "d-block"   : "d-none "}>
               
            
             
               <div className="row d-flex justify-content-around">
                
               <div className="col ">
               <button className="btn btn-sm btn-secondary mt-1 btn-block" onClick={this.Q1}>Q1</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1  btn-block" >Q2</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1  btn-block" >Q3</button>
               </div>
               <div className="col">
               <button className="btn btn-sm btn-secondary mt-1 btn-block" >Q4</button>
               </div>
               </div>
               <form>
            
            <div className="form-row mt-2">

                <div className="form-group col-8 border border-dark">

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

                <div className="form-group col-4 border border-dark">
                    <div className="form-row ">
                    <div className="form-group-right col-6 "> 
                    
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Transportation</span></div>
                    <div></div>
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Lodging</span></div>
                    <div></div>
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Food</span></div>
                    <div></div>
                 
                    <div className="text-right"><span className="badge  badge-secondary text-wrap" >Others</span></div>
                    <div></div>
                    </div>
                    <div className="form-group  col-3 "> 
                    <div className="badge badge-secondary text-wrap" >% 11</div>
                    <div className="badge badge-secondary text-wrap" >% 11</div>
                    <div className="badge badge-secondary text-wrap" >% 200</div>
                    <div className="badge badge-secondary text-wrap" >% 222</div>
                    </div>
                    <div className="form-group col-3 "> 
                
                    <div className="badge badge-primary text-wrap" >44 €</div>
                    <div className="badge badge-primary text-wrap" >44 €</div>
                    <div className="badge badge-primary text-wrap" >66 €</div>
                    <div className="badge badge-primary text-wrap" >66 €</div>
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