import React, { Component } from 'react';


 class Sum extends Component {

       state = {
        kur:"",
        GiderEU:"1460",
        GiderTL:"",

       }
    

    componentDidMount = async ()=>{
      console.log("acıldı");
     
     
        //const paralar = await axios.get("https://api.exchangeratesapi.io/latest");
        //console.log(paralar.data.rates.TRY);

    //   this.setState({
          
    //       GiderTL: this.state.GiderEU * paralar.data.rates.TRY

    //   });
     
     
      }
  

    render() {

        const {SumKon,ulke,EstTotal,RealTotal,Trans,Lodging,Other,Food}= this.props.SumData;
        //const{GiderEU, GiderTL} = this.state;
       const Total = Trans +Lodging+Other+Food;
       console.log(Total);
       const YuzdeTrans = Math.round(Trans/Total*100);
       const YuzdeLodging = Math.round(Lodging/Total*100);
       const YuzdeFood = Math.round(Food/Total*100);
       const YuzdeOther = Math.round(Other/Total*100);
        

        return (
            <div className={SumKon? "d-block container"  : "d-none container"} >
                
            <form>
            
            <div className="form-row ">

                <div className="form-group col-8 border border-dark">

                     <div className="form-row d-flex justify-content-center">
                        <h6 className= "text-center"><span className="badge badge-primary text-wrap" >BUSINESS TRIP {ulke}</span></h6>
                     </div>

                <div className="form-row ">
                        <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded">Total Budget</p>
                         <p className="text-center text-white bg-secondary rounded" >{EstTotal} €</p>
                        </div>

                         <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded ">Total Expenses</p>
                         <p className="text-center text-white bg-secondary rounded ">{RealTotal} €</p>
                         </div>

                         <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded">Difference</p>
                         <p className="text-center text-white bg-secondary rounded ">{EstTotal - RealTotal} €</p>
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
                    <div className="badge badge-secondary text-wrap" >% {YuzdeTrans}</div>
                    <div className="badge badge-secondary text-wrap" >% {YuzdeLodging}</div>
                    <div className="badge badge-secondary text-wrap" >% {YuzdeFood}</div>
                    <div className="badge badge-secondary text-wrap" >% {YuzdeOther}</div>
                    </div>
                    <div className="form-group col-3 "> 
                
                    <div className="badge badge-primary text-wrap" >{Trans} €</div>
                    <div className="badge badge-primary text-wrap" >{Lodging} €</div>
                    <div className="badge badge-primary text-wrap" >{Food} €</div>
                    <div className="badge badge-primary text-wrap" >{Other} €</div>
                    </div>
                    </div>
                </div>  
            </div>  

            </form>
                </div>  
                
        )
    }
}

export default Sum;