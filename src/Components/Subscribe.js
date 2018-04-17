import React, {Component} from 'react';
import '../App.css';
var axios = require('axios');
class Subscribe extends Component{
   constructor(props){
   	super(props);
   	this.state={
		   email:'',
		   feedback:''
   	};
   	this.onSubmit= this.onSubmit.bind(this);
	  this.onChange=this.onChange.bind(this);
	  this.isvalid=this.isvalid.bind(this);
	  

   }
    onSubmit(e){
      e.preventDefault();
	  console.log(this.state);
	  this.isvalid();
    }

    onChange(e){
      this.setState({[e.target.name]:e.target.value});
    }

    isvalid(){
        if(this.state.email===""){
			this.setState({feedback:"enter a valid email !"});
		}
		else{
			axios.post('http://192.168.43.208/6000', {
          "label":"subscribe",
           "email": this.state.email,
        })
        .then(function (response) {
          
          console.log(response);
        })
        .catch(function (error) {
        
          console.log(error);
        });
		}
	}

	render(){
		return(
			
			<div className="subscribe_section">

			<h3>Get in touch with us :</h3>
			<form id="subscribe_form" onSubmit={this.onSubmit}>
             <input type="email" name="email" className="text_box"  placeholder="enter email.." onChange={this.onChange}/>
             <button type="submit" className="button_b2">Subscribe</button>
			 <h5 className="sign_feedback">{this.state.feedback}</h5>
			</form>
	        </div>
               
             
			);
	}
}

export default Subscribe;
