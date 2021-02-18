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
                {  
                 value => {
                        const {MainKon,AktifKul,dispatch} = value;
                        // <div>
                        // <button type="submit" className="btn btn-primary" >Log In</button>
                        // </div>
                        const resimyolu = "/pictures/" + AktifKul + ".jpg";
                   
                       
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


// <nav class="navbar navbar-inverse navbar-fixed-top">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <a class="navbar-brand" href="#">WebSiteName</a>
//     </div>
//     <ul class="nav navbar-nav">
//       <li class="active"><a href="#">Home</a></li>
//       <li><a href="#">Page 1</a></li>
//       <li><a href="#">Page 2</a></li>
//       <li><a href="#">Page 3</a></li>
//     </ul>
//   </div>
// </nav>
  