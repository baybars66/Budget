import React, { Component } from 'react'

class SumQuarters extends Component {

    render() {
            const {QuarterKon} =this.props;

        return (
            <div>
                <div className={QuarterKon ? "d-block" : "d-none"}>
                    <div className="container-fluid p-1 my-3 bg-dark text-white">
                    
                 
                    <div className="form-group">
                    <div className="row d-flex justify-content-around">

                    <div className="col">
                    <button type="submit" className="btn btn-secondary btn-sm" >SHOW DATA PAGE</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                
            </div>
        )
    }
}







export default SumQuarters;