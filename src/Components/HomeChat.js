import React, {Component} from 'react';
import ei2 from '../ei2.png';
import user from '../user.png';
import mic from '../mic.png';
import Modal8 from './Modal8';
import '../App.css';
import Artyom from "artyom.js"
var axios= require('axios');
//const artyom = require("artyom.js");

class Home_chat extends Component{
      
      constructor(props){

            super(props);
           this.label="";
            this.messages=[];
            this.author=[];
           
             this.messagecount;
            
            this.state={
              username:'',
              message:'',
              errormsg:"",
              listen:false,
              update:false,
              image1:false
      
            };
            this.sendmessage=this.sendmessage.bind(this);
            this.onChange=this.onChange.bind(this);
            this.startDictation=this.startDictation.bind(this);
           
           
          }
          

          toggleModal = () => {
            this.setState({
              image1: !this.state.image1
            });
          }
        
      
	sendmessage(){
            this.setState({username:localStorage.getItem('username')});
            let m=document.getElementById('chatarea').value;
            if(m!==""){
                  this.author.push(0);
            this.messages.push(m);}
            document.getElementById('chatarea').value="";
            if(this.state.update===true){
                  this.setState({update:false});
            }
            else{
                  this.setState({update:true});
            }
            console.log( document.getElementById('chatarea').value);
            if(m!==""){
                  
                  axios.post('http://192.168.43.208/6000', {
                  "label":"text",
                  "username": this.state.username,
                  "message":  m,
                  "key":this.label,
                  
        })
        .then(function (response) {
              this.messages.push(response.text);
              this.label="";
               if(response.status=="re"){
                     this.label=response.key;
               }
              this.author.push(1);
              
          console.log(response);
          if(response.label==="image"){
                localStorage.setItem('graph',response.image);
                this.setState({image1:true});
          }
        })
        .catch(function (error) {
          console.log("no data yet");
          console.log(error);
        });
            }
      }
      
      onChange(e){
            this.setState({message:e.target.value});
      }
      componentWillReceiveProps(nextProps){
           // this.setState({username:props.username});
        }

       
       startDictation(){
            const artyom = new Artyom();
            var msg="",msg1="";
           var UserDictation = artyom.newDictation({
                  continuous:true, // Enable continuous if HTTPS connection
                  
                  onResult:function(text){
                      // Do something with the text
                     
                      console.log(text);
                      msg=text;
                      if(msg !== ""){
                           
                            msg1=msg;
                      }
                      document.getElementById('chatarea').value=msg1;
                     
                     
                    
                  } ,
      
                  onStart:function(){
                      console.log("Dictation started by the user");
                      document.getElementById('chatarea').value="";

                  },
                  onEnd:function(){
                      console.log("Dictation stopped by the user");
                  },
            
              });
              
              

             if(this.state.listen===false){
                   this.setState({listen:true});
            this.setState({errormsg:"Listening.."});
           
            document.getElementById('chatarea').value="";
            artyom.say("Listening.. say something");
         
            
              
             
            UserDictation.start();
            
            document.getElementById('chatarea').value+=msg1;
      
            }
            else{
                  this.setState({listen:false});
                  this.setState({errormsg:""});
                  UserDictation.stop();
            }
              
             
              }
            
       
      
       
       
       
       
       
       
       
        /*startDictation() {
  
            if (window.hasOwnProperty('webkitSpeechRecognition')) {
        
              var recognition = new webkitSpeechRecognition();
        
              recognition.continuous = false;
              recognition.interimResults = false;
        
              recognition.lang = "en-US";
              recognition.start();
              document.getElementById("mic").classList.add("animated");
              document.getElementById("mic").classList.add("text-danger");
              document.getElementById('chatarea').innerHTML = "Listening..";
        
              recognition.onresult = function(e) {
      
                  this.setState({message:e.results[0][0].transcript});                       
                recognition.stop();
                document.getElementById("mic").classList.remove("animated");
                document.getElementById("mic").classList.remove("text-danger");
                
                  
                    
              };
        
            }
            else{
                  this.setState({message:"not supported"}); 
            
            }
           
          }
        */
      

      


    render(){

      let list = [];
          for (let message1 in this.messages) {
             if(this.author[message1]==0){
              list.push(

                  <div className="chat user">
                  <div className="user_photo"><img src= {user} className="photo_user" alt=""/></div>
                  <p className="chat_message">{this.messages[message1]}</p>
                  </div>


                /*  <div className="list-item" key={author} onClick={() => this.navigateTo(this.authors[author].id)}>
                      <img src={authorlogo} alt=""/>
                      <div className="list-content">
                          <div className="authorlist-row1">
                              <span className="author-name">{this.authors[author].name}</span>
                              <span> Born in{this.authors[author].born}</span>
                          </div>
                          <div className="authorlist-row2">
                              <span>Age {this.authors[author].age}</span> /
                              <span> {gender}</span>
                          </div>
                      </div>
                  </div>*/
              );
              
            }
            else{
                  list.push(
                  <div className="chat bot">
                  <div className="user_photo"><img src= {ei2} className="photo_ei" alt=""/></div>
                  <p className="chat_message">{this.messages[message1]}</p>
                  </div> );
            
            }

      }

    	return (
        
           <div className="chat_section">
                <div className="chat_logs">
                       { /*<div className="chat user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/></div>
                              <p className="chat_message">hey good morning</p>
                        </div>
                        
                        <div className="chat bot">
                              <div className="user_photo"><img src= {ei2} className="photo_ei" alt=""/></div>
                              <p className="chat_message">good morning, how can I help you?</p>
                        </div>

                        <div className="chat user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/></div>
                              <p className="chat_message">May i know about eibots?</p>
                        </div>
                        <div className="chat bot">
                              <div className="user_photo"><img src= {ei2} className="photo_ei" alt=""/></div>
                              <p className="chat_message">we are the only platform for building bots for assisting teachers. You can automate your works, analyse performance of your students without any programming skills. you can find more details at help section.</p>
                        </div>
                      
                        <div className="chat user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/></div>
                              <p className="chat_message">Send a mail to enfuegos regarding miniproject deadline 24-03-2018</p>
                        </div>
                        
                        <div className="chat bot">
                              <div className="user_photo"><img src= {ei2} className="photo_ei" alt=""/></div>
                              <p className="chat_message">Want to attach any files to it?</p>
                        </div>

                        <div className="chat user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/></div>
                              <p className="chat_message">yes, add final.xls</p>
                        </div>
                        <div className="chat bot">
                              <div className="user_photo"><img src= {ei2} className="photo_ei" alt=""/></div>
                              <p className="chat_message">Sending completed</p>
                        </div>
                        <div className="chat user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/></div>
                              <p className="chat_message">Take attendance of s8 cse</p>
                        </div>
                        <div className="chat bot">
                              <div className="user_photo"><img src= {ei2} className="photo_ei" alt=""/></div>
                              <p className="chat_message">add absent roll numbers</p>
                        </div>

                        <div className="chat user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/></div>
                              <p className="chat_message">1,2,3,39</p>
                        </div>
                        <div className="chat bot">
                              <div className="user_photo"><img src= {ei2} className="photo_ei" alt=""/></div>
                              <p className="chat_message">absent students name:<br/> Abhishek<br/> Adarshya <br/>Ahmed <br/>Ghee <br/>Attandance updated</p>
                        </div>
                        <div className="chat user">
                              <div className="user_photo"><img src= {user} className="photo_user" alt=""/></div>
                              <p className="chat_message">(@pranav): I have that dataset. Since it is huge you can meet me tomorrow and i will give it to you.</p>
                        </div>*/}
            
                        {list}


                </div>

                 <div className="chat_form">
                         <img id="mic" src={mic} alt="" className="micimage" onClick={this.startDictation}/>
                         <textarea id="chatarea" name="message" onChange={this.onChange}>{this.state.message}</textarea>
                         <button onClick={this.sendmessage}> Ask </button>
                 </div>
                 <h5 className="sign_feedback" >{this.state.errormsg}</h5>

          
             
     <Modal8 show={this.state.image1}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal8>
             
             </div>
       

        
        
   
    		);
    }
    
}

export default Home_chat;