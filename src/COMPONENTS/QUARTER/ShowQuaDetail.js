    import React, { Component } from 'react'



    class ShowQuaDataDetail extends Component {

      


        render() {
            const {Paket} =this.props;
           
            //console.log("Qua Detail renderdaa", Paket);
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

