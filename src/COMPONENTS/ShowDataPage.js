import React, { Component } from 'react'
import Talep from './context';
import axios from 'axios';

 class ShowData extends Component {

    state = {
        buton : true,
        SwitchKon : "YES", 
        ulke:"",
        AnaData: [{
            id:"",
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
Work =async()=>{
    if(this.state.SwitchKon==="YES")
     await this.setState({
            SwitchKon: "NO"

     });
      else 
      
     await this.setState({
             SwitchKon: "YES"
 
      });
      this.Goster();
}

Degis = async (e)=>{
   await this.setState({
        ulke: e.target.value
    })
    
    this.Goster();

}

Goster = async() =>{
 
    const istek = {
      ulke : this.state.ulke,
      estimate: this.state.SwitchKon
    }
  //console.log(istek);
  await axios.post('http://88.250.131.163:10066/GetData/', istek)
    .then ( (response)=>{
           // console.log(response.data);
            this.setState({
                AnaData : response.data
            });
    });
}


Sil = async (e)=>{
        const ulke =document.getElementById("ulkeler").value;
        const silinecek ={
            id: e.target.id,
            ulke: ulke
        };
       console.log(silinecek);
        await axios.post('http://88.250.131.163:10066/Data/sil/', silinecek)
        .then ( (response)=>{
             console.log(response.data);
             this.Goster();
            //  this.setState({
            //      AnaData : response.data
 
 
            //  });

       
 
       });
 
       // basla();
         
      
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
     const {AnaData, SwitchKon} = this.state;
        return(
            <Talep>
                {
                    value => {
                    const {country,ShowDataKon} = value;
                  
                    
        return (
            <div className= {ShowDataKon ? "d-block"   : "d-none "}>
            
          
            <div className="row ">

            <div className="col">{ SwitchKon==="YES" ? "Estimate" : "Realized"}
                <div></div>
                    <label  className="switch">
                    <input id="sel2" type="checkbox" onChange={this.Work}></input>
                    <span className="slider round"></span>
                    </label>
                    </div>

            <div className="col">
            <label htmlFor="ulkeler">Select list:</label>
            <select className="form-control" id="ulkeler" onChange = {this.Degis}  >   
            <option></option>
            {  
              country.map( adam =>{
               return( 
                    <option key = {adam.name}> {adam.name}  </option>
                      )
              })
            }
            </select>

            </div>
          
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
               return( <tr key= {bilgi.id}>
                 
                <th scope="row">{bilgi.User}</th> 
                   
                    <td> {bilgi.Depart} </td> 
                    <td>  {bilgi.Donus}  </td> 
                    <td> {bilgi.Descrip} </td> 
                    <td> {bilgi.Category} </td> 
                    <td> {bilgi.Quantity} </td> 
                    <td> {bilgi.Price} </td> 
                    <td> {bilgi.Amount}</td> 
                    <td> <i className="fas fa-trash-alt " id ={bilgi.id}   onClick= {this.Sil}> </i></td> 
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