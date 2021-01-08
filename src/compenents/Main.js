import React, { Component } from 'react'
import Takvim from './Takvim'
import logo from '../PICTURES/SUELA.jpg'

 class Main extends Component {
    render() {

        return (

            <div>
            <div className="container p-1 my-1 bg-dark text-white">
            <h2 className="text-center">MAIN PAGE</h2>
            </div>

            <div className = "col-md-16 mb-4">
            <div className = "card">
            <div className = "card-header d-flex justify-content-between">
            <h2 className = "d-inline">SUELA You are the BEST in MARTAŞ </h2>
            <img src={logo} className="rounded float.right" alt="Cinque Terre" width="130" height="130"></img>
            </div>
            </div>
            </div>

            <div className="container p-1 my-3 bg-dark text-white">
            <div className= 'float.left'>
            <Takvim />
            </div>
            </div>


            </div>
             
             
          
           



            
        )
    }
 }

export default Main;