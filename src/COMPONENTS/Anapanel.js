import React, { Component } from 'react'
import Talep from './context';
import Axios from './Axios';



class Anapanel extends Component {

    state = {
        deneme: false,
       
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

    Quarter1 = (dispatch, e)=>{
        e.preventDefault();
        console.log("Quarter1 Fonk");
        const Q1 = await axios.get("http://88.250.131.163:10066/Q1");

        console.log(Q1);

    }  

    render() {

        return(
            <Talep>
                {
                    value => {
                    const {AktifKul, PanelKon, dispatch} = value;
            
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
                    <button type="submit" className="btn btn-secondary btn-sm" onClick={this.ToShowPage.bind(this, dispatch)}>SHOW DATA PAGE</button>
                    </div>

                    <div className="col">
                    <button type="submit" className="btn btn-secondary btn-sm" onClick={this.BilgiGiris.bind(this, dispatch)}>ADD DATA PAGE</button>
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
                    
                    className="btn btn-secondary btn-sm" onClick={this.toConfig.bind(this, dispatch)} >CONFIGRATION</button>
                    </div>

                    <div className="col">
                    <button type="submit" className="btn btn-secondary btn-sm" onClick={this.Quarter1.bind(this, dispatch)}>Quarter 1</button>
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