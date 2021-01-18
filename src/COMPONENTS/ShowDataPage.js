import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 class ShowData extends Component {

    state = {
        buton : true,
         
        AnaData: [{
            user: "",
            Depart:"",
            Donus: "",
            Descrip: "",
            Category: "",
            Quantity: "",
            Price: "",
            Amount:""
        }],
    }

Goster = async(dispatch, e) =>{
  console.log(e.target.value);
  await axios.get('http://localhost:5006/Data/' + e.target.value)

   .then ( (response)=>{
           // console.log(response.data);
            this.setState({
                AnaData : response.data


            });
            console.log(this.state.AnaData);
    //         if (response.status ===200)
    //           this.setState({
    //               butonrengi: "btn btn-success",
    //               butonyazi: "OK"
    //           });
    //           else
    //           this.setState({
    //             butonrengi: "btn btn-danger",
    //             butonyazi: "ERROR"
    //         });
    //   })
    //   .catch( (err)=>{
    //       console.log(err);

      });



}
    Sil = async (basla, e)=>{
        console.log(e.target.id);
        await axios.delete('http://localhost:5006/Cat/sil/' + e.target.id);
    
        basla();
         
      
      }
    // PasKon =(e)=>{
       
       
    //     //console.log(this.state.buton);
    //    if (e.target.value === "") 
    //    this.setState({
    //     buton : true
    // });
    //     else
    //     this.setState({
    //         buton : false
    //     });
    // }


    render() {
     const {AnaData} = this.state;
        return(
            <Talep>
                {
                    value => {
                    const {country,ShowDataKon, dispatch} = value;
                  
                    
        return (
            <div className= {ShowDataKon ? "d-block"   : "d-none "}>
            <div>
            <h5>LIST :</h5>
            </div>

            <div className="form-group">
            
            <label htmlFor="sel1">Select list:</label>
            <select className="form-control" id="sel1" onChange = {this.Goster.bind(this, dispatch)}  >   
            <option></option>
            {  
              country.map( adam =>{
               return( 
                    <option key = {adam.name}> {adam.name}  </option>
                      )
              })
            }
            </select>
            <div>
            <h5>List:</h5>
            <table className="table table-striped">
            <thead>
            <tr>
                <th scope= "col">User</th>
                <th scope= "col">Depart</th>
                <th scope= "col">Return</th>
                <th scope= "col">Descrip</th>
                <th scope= "col">Category</th>
                <th scope= "col">Quantity</th>
                <th scope= "col">Price</th>
                <th scope= "col">Amount</th>
                <th scope= "col">Delete</th>

            </tr>
            
            </thead>
            <tbody>

           
            {  
              AnaData.map( bilgi =>{
               return( <tr>
                 
                <th scope="row">{bilgi.User}</th> 
                   
                    <td> {bilgi.Depart} </td> 
                    <td>  {bilgi.Donus}  </td> 
                    <td> {bilgi.Descrip} </td> 
                    <td> {bilgi.Category} </td> 
                    <td> {bilgi.Quantity} </td> 
                    <td> {bilgi.Price} </td> 
                    <td> {bilgi.Amount}</td> 
                    <td> <i className="fas fa-trash-alt " id ={bilgi.User} onClick= {this.Sil}> </i></td> 
                    </tr>
                      )
                      
              })
            }
          
           </tbody>
           </table>

         



            </div>
            </div>
           
            
            
            </div>
        )

        }}

    </Talep>
        )}
}

export default ShowData;