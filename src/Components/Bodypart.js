import React, {Component} from 'react';
import '../App.css';
var axios = require('axios');
class Bodypart extends Component{


    
    constructor(props){
      super(props);
      this.state={
        email:'',
        password:'',
        confirm_password:'',
        job:'Teacher',
        accept:false,
        error:{},
        username:"",
        errormsg:""

      };
      this.onSubmit= this.onSubmit.bind(this);
      this.onChange=this.onChange.bind(this);
      this.isvalid=this.isvalid.bind(this);
    }
    isvalid(){
      if(this.state.email===""){
        this.setState({errormsg:"enter a valid email !"});
      }
      else if(this.state.password===""){
        this.setState({errormsg:"enter password !"});
      }
      else if(this.state.username===""){
        this.setState({errormsg:"enter a user name !"});
      }
      else if(this.state.password!==this.state.confirm_password){
        this.setState({errormsg:"passwords donot match !"});
      }
      else if(this.state.accept===false){
        this.setState({errormsg:"accept terms and conditions !"});
      }
      else{
        axios.post('http://192.168.43.208/6000', {
          "label":"signup",
           "email": this.state.email,
            "password": this.state.password,
            "username":this.state.username,
            "job":this.state.job
        })
        .then(function (response) {
          
          console.log(response);
          if(response.status==="ok"){
            this.setState({errormsg:"Account created"})
          }
          else{
            this.setState({errormsg:"Error in account creation"})
          }
        })
        .catch(function (error) {
          
          console.log(error);
        });


      }
      
      

      
    }
    
      onSubmit(e){
      e.preventDefault();
      this.isvalid();
      console.log(this.state);

      
    }

    onChange(e){
      this.setState({[e.target.name]:e.target.value});
    }

	render(){
		return(
			<div className="body_part">
			<div className="logo_dummy"/>
        <div className="signup_portion">
             
             <form className="signup_form" onSubmit={this.onSubmit} >
                    <h5> New to ei bot? sign up here </h5>
                    <input type="text" className="text_box_sign" placeholder="e mail" name="email" onChange={this.onChange}/>
                    <input type="text" className="text_box_sign" placeholder="username" name="username" onChange={this.onChange}/>

                  
                    <input type="password" className="text_box_sign" placeholder="password" name="password" onChange={this.onChange}/>
                    <input type="password" className="text_box_sign" placeholder="confirm password" name="confirm_password" onChange={this.onChange}/>
                    <h5 id="iam_a">I am a </h5>
                     
                    
                     
                    <input  onChange={this.onChange} onSubmit={this.onSubmit} type="radio" className="radio_button1" name="job" value="Teacher" checked= {true} /> <span className="radio_text">Teacher</span>

                    <input onChange={this.onChange} onSubmit={this.onSubmit} type="radio" className="radio_button2" name="job" value="Student" />  <span className="radio_text" >Student</span>
                    <br/>
                    
                    <input onChange={this.onChange} onSubmit={this.onSubmit} type="radio" className="radio_button3" name="accept" value="true"  /> <span className="radio_text" > Accept terms and conditions</span>
                     <br/>

                    <button type="submit" className="button_b2" > signup </button>

                  <h5 className="sign_feedback">{this.state.errormsg}</h5>
                     
             </form>



        </div>
        </div>

		);
}
}
export default Bodypart;