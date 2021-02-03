    import React, { Component } from 'react'
   // import Talep from './context';
    import axios from 'axios';


    class ShowQuaDataDetail extends Component {

        // state={
        //     paket:this.props,

        // }

componentDidMount (){
 this.Init();

}

Init = async() =>{
console.log(this.props.bilgi);
    var wht =this.props.bilgi;
    console.log("Quarterdatdetail açıldı");
    await axios.post("http://localhost:10066/QDETLIST/", wht)
    .then((response)=>{
console.log(response.data);
// this.setState({

//     EST: response.data.est,
//     REAL: response.data.real,

//    });
 
    })

}



        render() {
            return (
                <div>
                    
                </div>
            )
        }
    }
    
     
    export default ShowQuaDataDetail;