import React, { Component } from 'react'
import Talep from './context';

class Main extends Component {

    toBack =(dispatch, e) =>{
       // e.preventDefault();
        dispatch({type:"ToMain", payload:true});

    }

  render() {

       
        return(
            <Talep>
                {  // className="rounded float.right" alt="Cinque Terre"
                 value => {
                        const {MainKon,AktifKul,dispatch} = value;
                        <div>
                        <button type="submit" className="btn btn-primary" >Log In</button>
                        </div>
                        const resimyolu = "/pictures/" + AktifKul + ".jpg";
                    // const {kisiler} =value;
                    // const isim = kisiler[0].name;//****************** */
                    //console.log(isim);
                       
                    return (
                    <div className={MainKon ? "d-block" : "d-none"}>
                    <div className="container p-1 my-2 bg-dark text-white">
                    <div className="d-flex justify-content-between">
                   
                   
                    <h3 className="m-3">{AktifKul} </h3>
                    <h5 className="m-4" onClick={this.toBack.bind(this, dispatch)}>You are the BEST in MARTAŞ </h5>
                    <img className="rounded float-left" 
                    src={ resimyolu } alt={AktifKul}  ></img>
                        </div>
                   
                    </div>
                    </div>

                  
                    
                    )}
                }

            </Talep> )}
        
        }


export default Main;
