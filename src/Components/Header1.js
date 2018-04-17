import React, {Component} from 'react';
import ei2 from '../ei2.png';
import '../App.css';
import {Link, Redirect} from 'react-router-dom';
var axios = require('axios');


class Header1 extends Component{
     
    constructor(props){
      super(props);
      this.state={
        email:'',
        password:'',
        error:{},
        valid:true,
        errormsg:"",
        homet:false,
        homes:false

      };
      this.onSubmit= this.onSubmit.bind(this);
      this.onChange=this.onChange.bind(this);
      this.isValid=this.isValid.bind(this);
    }

    isValid(){
       
      if(this.state.email===""||this.state.password===""){
        this.setState({errormsg:"email and password required !"});
          return false;

      }
      return true;

    }
	  onSubmit(e){
      e.preventDefault();
      console.log(this.state);
     
      if(this.isValid()===true){
        console.log("inside axios");
      
         axios.post('http://192.168.43.208/6000/eibots', {
          "label":"login",
           "email": this.state.email,
            "password": this.state.password
        })
        .then(function (response) {
          console.log("inside then");
          console.log(response);
          
          if(response.status==="ok"){
            localStorage.setItem('username',response.username);
            if(response.role==="teacher"){
            this.setState({homet:true});}
            else{
              this.setState({homes:true});
            }
          
          }
        })
        .catch(function (error) {
          console.log("inside catch");
          console.log(error);
        });
      
      
        }
      else 
      console.log("error");
    }

    onChange(e){
      this.setState({[e.target.name]:e.target.value});
    }
    render(){
      if(this.state.homet===true){
        return <Redirect to="/thome"/>
      }
      if(this.state.homes===true){
        return <Redirect to="/shome"/>
      }
    	return (
           <div className="login_portion">
      	    <div className="logo_name">
      	
      		<img src= {ei2} alt="error" className="logo"/>
      		<h1><span className="highlight">ei</span>bots</h1>
      		</div>
          
      		<form className="login_form" onSubmit={this.onSubmit}>
      		<input type="email" name="email" placeholder="email" className="text_box" onChange={this.onChange}/>
      		<input type="password" name="password" placeholder="password" className="text_box" onChange={this.onChange}/>
      		<button type="submit" className="button_b1">login</button>
          <h5 className="login_feedback">{this.state.errormsg}</h5>
      		</form>
         
      </div>
    		);
    }
}
export default Header1;