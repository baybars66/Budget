import React, { Component } from 'react'
import Talep from '../context';
import General from './General';



class Anapanel extends Component {

    state = {
        deneme: false,
        bilgi:"",
       
    }

    BilgiGiris = (dispatch, e)=>{
        e.preventDefault();
        dispatch({type:"DataPageOpen", payload:true});

    }   
    
    ToShowPage = (dispatch, e)=>{
        e.preventDefault();
        dispatch({type:"ShowPageOpen", payload:true});

    }   

    toConfig = (dispatch, e)=>{
        e.preventDefault();
        dispatch({type:"ConfigPageOpen", payload:true});

    }  

    ToQuarter = async (dispatch, e) =>{
        e.preventDefault();
        dispatch({type:"QuarterPageOpen", payload:true});
    
    }  
      


// componentDidUpdate=()=>{
//     this.General();
// }
    render() {
  const {bilgi}=this.state;
  console.log("Anapanelde ", bilgi)
        return(
            <Talep>
                {
                    value => {
                    const {AktifKul, PanelKon, dispatch} = value;
            
                 return (
                    <div className={PanelKon ? "d-block" : "d-none"}>
                    <div className="container-fluid p-1 my-3 bg-dark text-white">
                    <h4 className="text-center" >MAIN PANEL</h4>

                    <div className="container-fluid">
                    <div className="jumbotron">
                    <form>
                    <div className="form-group">
                    <div className="row d-flex justify-content-around">
                    <div className="col">
                    <button type="submit" className="btn btn-secondary btn-sm btn-block" onClick={this.ToQuarter.bind(this, dispatch)}>QUARTER</button>
                    </div>
                    <div className="col">
                    <button type="submit" className="btn btn-secondary btn-sm btn-block" onClick={this.ToShowPage.bind(this, dispatch)}>SHOW DATA PAGE</button>
                    </div>

                    <div className="col">
                    <button type="submit" className="btn btn-secondary btn-sm btn-block" onClick={this.BilgiGiris.bind(this, dispatch)}>ADD DATA PAGE</button>
                    </div>
                    <div className="col">
                    <button type="submit" disabled = 
                       {(() => {
                        switch (AktifKul) {
                          case "Suela":   return false;
                          case "Baybars": return false;
                          case "Ziya":  return false;
                          default:      return true;
                        }
                      })()}
                    
                    className="btn btn-secondary btn-sm btn-block" onClick={this.toConfig.bind(this, dispatch)} >CONFIGRATION</button>
                    </div>

                   
                    
            
                    </div>
                    </div>
            
                    </form>
                    </div>
                    </div>
                    </div>
                  <General />
                
                    </div>

                    )
                }

                }
             </Talep>
        )
    }
}

export default Anapanel;