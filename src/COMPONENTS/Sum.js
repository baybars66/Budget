import React, { Component } from 'react';

 class Sum extends Component {


    render() {

        const SumKon = this.props.SumKon;
       
 

        return (
            <div className={SumKon? "d-block container"  : "d-none container"} >
                
            <form>
            
            <div className="form-row ">

                <div className="form-group col-8 border border-dark">

                     <div className="form-row d-flex justify-content-center">
                        <h6 className= "text-center"><span className="badge badge-primary text-wrap" >BUSINESS TRIP BALKAN</span></h6>
                     </div>

                <div className="form-row ">
                        <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded">Total Budget</p>
                         <p className="text-center text-white bg-secondary rounded ">1460 €</p>
                        </div>

                         <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded ">Total Expenses</p>
                         <p className="text-center text-white bg-secondary rounded ">1460 €</p>
                         </div>

                         <div className="form-group col">
                         <p className="text-center text-white bg-secondary rounded">Difference</p>
                         <p className="text-center text-white bg-secondary rounded ">1460 €</p>
                         </div>
                </div>
                </div>

                <div className="form-group col-4 border border-dark">
                    <div className="form-row border border-dark">
                    <div className="form-group-right col-6 border border-dark"> 
                    
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Transportation</span></div>
                    <div></div>
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Lodging</span></div>
                    <div></div>
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Food</span></div>
                    <div></div>
                    <div className="text-right"><span className="badge badge-secondary text-wrap" >Gifts</span></div>
                    <div></div>
                    <div className="text-right"><span className="badge  badge-secondary text-wrap" >Others</span></div>
                    <div></div>
                    </div>
                    <div className="form-group  col-3 "> 
                    <div className="badge badge-secondary text-wrap" >% 21</div>
                    <div className="badge badge-secondary text-wrap" >% 21</div>
                    <div className="badge badge-secondary text-wrap" >% 21</div>
                    <div className="badge badge-secondary text-wrap" >% 21</div>
                    <div className="badge badge-secondary text-wrap" >% 21</div>
                    </div>
                    <div className="form-group col-3 "> 
                
                    <div className="badge badge-primary text-wrap" >1250 €</div>
                    <div className="badge badge-primary text-wrap" >20 €</div>
                    <div className="badge badge-primary text-wrap" >217 €</div>
                    <div className="badge badge-primary text-wrap" >2 €</div>
                    <div className="badge badge-primary text-wrap" >21 €</div>
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