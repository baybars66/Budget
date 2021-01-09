import React, { Component } from 'react'
import User from '../compenents/User';
import Talep from '../compenents/context';

 class Users extends Component {
    render() {
      
        return(
           <Talep>
               {
                   value => {
                       const {kisiler} = value;
                    //console.log(kisiler);
                    return (
            <div>
              {
                kisiler.map( kisi => {
                    return (
                        <User
                          key = {kisi.id} // çok önemli uniq key hatası için 
                          no = {kisi.id}
                          name = { kisi.name}
                          salary = {kisi.salary}
                          dep = {kisi.dep}
                          />

                    )



                })
            }
            </div>
        )




                   }



               }


           </Talep>



        )



        
    }
    
}


export default Users;