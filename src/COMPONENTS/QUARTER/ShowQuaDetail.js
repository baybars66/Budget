    import React, { Component } from 'react'
   // import Talep from './context';
    import axios from 'axios';


    class ShowQuaDataDetail extends Component {

      


        render() {
            const {Paket} =this.props;
           
            console.log("Qua Detail renderdaa", Paket);
            //console.log(Paket[0]);
            //console.log(Paket[0].Sum);
    

            return (
                <div>

          <div>
          
          <table className="table table-striped">
          <thead>
          <tr>
              <th scope= "col">Description</th>
              <th scope= "col">Category</th>
              <th scope= "col">Quantity</th>
             
              <th scope= "col">Amount</th>
             

          </tr>
          
          </thead>
          <tbody>

 
     
           {  
           
               Paket.map( (bilgi) =>{
                return( <tr key= {bilgi.Descrip}>
                  
                 <th scope="row">{bilgi.Descrip}</th> 
                
                    
                     <td> {bilgi.Category} </td> 
                     <td> {bilgi.Quan} </td> 
                     <td> {bilgi.Sum}</td> 
                   
                     </tr>
                       )
                       
               })
             }
       


         </tbody>
         </table>

       



          </div>
                    
                </div>
            )
        }
    }
    
     
    export default ShowQuaDataDetail;




     
    // {  
           
    //     setPaket.map( bilgi =>{
    //      return( <tr key= {bilgi.Descrip}>
           
    //       <th scope="row">{bilgi.Descrip}</th> 
         
             
    //           <td> {bilgi.Category} </td> 
    //           <td> {bilgi.QUANTY} </td> 
    //           <td> {bilgi.DescSUM}</td> 
            
    //           </tr>
    //             )
                
    //     })
    //   }




//     <td> 
//     { ( () =>{
//             var hadi = bilgi.Depart;
//             var yil = hadi.substring(0,4);
//             var ay = hadi.substring(5,7);
//             var gun = hadi.substring(8,10);
//             var zaman = gun+"." +ay +"."+ yil ;
//            return (zaman);
    
//          })()
//     } 
// </td> 