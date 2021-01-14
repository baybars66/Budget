import React, { Component } from 'react'
import Talep from './context';


class Anapanel extends Component {

state = {
    deneme: false,
}

BilgiGiris = (dispatch, e)=>{
    e.preventDefault();
    dispatch({type:"DataPageOpen", payload:true});

} 
componentDidMount = () =>{
  
   //console.log('Anapanel açıldı');
   }

    render() {

        return(
            <Talep>
                {
                    value => {
                    const {PanelKon, dispatch} = value;
                    
                    // const {dispatch}=value;        
                   // console.log(PanelKon);
                    //iler = this.state.kisiler;
                    //const{kisiler} = this.state.kisiler;
                  
                    //  const gorunum = this.state.gorunum;

        return (
            <div className={PanelKon ? "d-block" : "d-none"}>
            <div className="container-fluid p-1 my-3 bg-dark text-white">
            <h4 className="text-center">MAIN PANEL</h4>
           

            <div className="container-fluid">
            <div className="jumbotron">
            <form>
            <div className="form-group">
            <div className="row d-flex justify-content-around">
            <div className="col">
            <button type="submit" className="btn btn-secondary btn-sm" onClick={this.BilgiGiris.bind(this, dispatch)}>ADD DATA PAGE</button>
            </div>
            <div className="col">
            <button type="submit" className="btn btn-secondary btn-sm" >CONFIGRATION</button>
            </div>
            
            </div>
            </div>
            
            </form>
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
export default Anapanel;