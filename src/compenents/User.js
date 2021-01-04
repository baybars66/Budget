import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Talep from './context';
 

class User extends Component {

  state = {
        isvisible : true,
        digerstate :"iyi"
        }

/*
  constructor(props){
     super(props);
    
     this.state = {
       isvisible: false

     }
  }
  
*/

   tikla = (e) => {
    
      this.setState({
      isvisible : ! this.state.isvisible,
      digerstate :"kötü"
       });
   
   }

   sil = (dispatch,e) => {
    const {no} = this.props;
    console.log(no);
    dispatch({type:"sil", payload:no});
 
   }

    render() {
         const {name, dep, salary} = this.props;
         const {isvisible} = this.state;
         const {digerstate} = this.state;
         console.log(this.props);
        return (
            <Talep>
            {
                value => {
                    const {dispatch} = value ;
                   
                    return (
                        <div className = "col-md-8 mb-4">
                        <div className = "card">
                        <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline" onClick = {this.tikla}> {name}</h4>
                        <i className="far fa-trash-alt" style={{cursor: "pointer"}} onClick={this.sil.bind(this, dispatch)}></i>
                        </div>
                        {
                            isvisible ? 
                            <div className = "card-body">
                        <p className = "card-text"> Maaş:{salary} </p>
                        <p className = "card-text"> Dep :{dep} </p>

                        </div>
                        : null


                        }
                        




                        </div>


                        </div>



                    )

                }



            }


            </Talep>


        )
       
    }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    dep : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}

User.defaultProps ={
    name :"BİLGİ YOK",
    dep :"BİLGİ YOK",
    salary : "BİLGİ YOK"
}


export default User;
