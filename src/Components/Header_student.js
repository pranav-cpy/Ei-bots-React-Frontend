import React, { Component } from 'react';
import '../App.css';
import ei2 from '../ei2.png';
import eye from '../eye.png';
import plus from '../plus.png';
import help from '../help.png';
import Modal from './Modal';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import Modal5 from './Modal5';
import Modal6 from './Modal6';
import Modal7 from './Modal7';
import notification_white from '../notification.png';
import notification_orange from '../notification1.png';
import {Link, Redirect} from 'react-router-dom';
class Header_student extends Component {
  
    constructor() {
        super();
        
        this.state = {
          isOpen_help: false,
          isOpen_emailview:false,
          isOpen_fileview:false,
          isOpen_notif:false,
          isOpen_email:false,
          isOpen_file:false,
          isOpen_attendance:false,
          isOpen_timetable:false,
          showhelp: false,
          showview: false,
          showplus: false,
          shownotif: false,
          newnotif:true,
          log:false
        
        };
        this.showview = this.showview.bind(this);
        this.closeview = this.closeview.bind(this);
        this.showplus = this.showplus.bind(this);
        this.changestate=this.changestate.bind(this);
        this.closeplus = this.closeplus.bind(this);
        
        
      }
      changestate(){
        this.setState({log:true});
      }
      toggleModal_help = () => {
        this.setState({
          isOpen_help: !this.state.isOpen_help
        });
      }
      toggleModal_emailview = () => {
        this.setState({
          isOpen_emailview: !this.state.isOpen_emailview
        });
      }
      toggleModal_fileview = () => {
        this.setState({
          isOpen_fileview: !this.state.isOpen_fileview
        });
      }
      toggleModal_email = () => {
        this.setState({
          isOpen_email: !this.state.isOpen_email
        });
      }
      toggleModal_notif = () => {
        this.setState({
          isOpen_notif: !this.state.isOpen_notif
        });
        this.setState({
          newnotif: false
        });
      }
      toggleModal_file = () => {
        this.setState({
          isOpen_file: !this.state.isOpen_file
        });
      }
      toggleModal_attendance = () => {
        this.setState({
          isOpen_attendance: !this.state.isOpen_attendance
        });
      }
      toggleModal_timetable = () => {
        this.setState({
          isOpen_timetable: !this.state.isOpen_timetable
        });
      }
    
    
      showview(event) {
        event.preventDefault();
        
        this.setState({ showview: true }, () => {
          document.addEventListener('click', this.closeview);
        });
      }
      
      closeview(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showview: false }, () => {
            document.removeEventListener('click', this.closeview);
          });  
          
        }
      }
    
      shownotif(event) {
        event.preventDefault();
        
        this.setState({ shownotif: true }, () => {
          document.addEventListener('click', this.closenotif);
        });
      }
      
      closenotif(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
            {this.setState({newnotif:false})}
          this.setState({ shownotif: false }, () => {
            document.removeEventListener('click', this.closenotif);
          });  
          
        }
      }
    
      showplus(event) {
        event.preventDefault();
        
        this.setState({ showplus: true }, () => {
          document.addEventListener('click', this.closeplus);
        });
      }
      
      closeplus(event) {
        
        if (!this.dropdownMenu.contains(event.target)) {
          
          this.setState({ showplus: false }, () => {
            document.removeEventListener('click', this.closeplus);
          });  
          
        }
      }
    
    

    
    
    render() {
        
       if(this.state.log===true){
        return <Redirect to="/login"/>
       }
       return (
        
        <div className="header_home">
      	    <div className="logo_name">
      	
      		<img src= {ei2} alt="error" className="logo"/>

      		<h1><span className="highlight">ei</span>bots</h1>
      		</div>
            <div className="icon_class">
             <div className="leftpart">
             <button onClick={this.toggleModal_help}  className="headbutton">
             <img src= {help} alt="error" className="icons"/>
            </button>
            
           
            
            <button className="headbutton" onClick={this.toggleModal_notif} >
            {this.state.newnotif ? <img src= {notification_orange} alt="error" className="icons"/> :<img src= {notification_white} alt="error" className="icons"/>}
            
            </button>
            
            {
          this.state.showview
            ? (
              <div className="menu1" ref={(element) => { this.dropdownMenu = element;}}> 
                <button onClick={this.toggleModal_emailview}  className="inneritems"> email groups </button><br/>
            
                <button onClick={this.toggleModal_fileview}  className="inneritems"> files </button><br/>
                
              </div>
            )
            : (
              null
            )
        }

    

        {
          this.state.showplus
            ? (
              <div className="menu3" ref={(element) => { this.dropdownMenu = element;}}> 
                <button onClick={this.toggleModal_email} className="inneritems"> email group </button><br/>
            
                <button onClick={this.toggleModal_file} className="inneritems"> file </button><br/>
            
                <button  onClick={this.toggleModal_timetable} className="inneritems"> time table </button>
              </div>
            )
            : (
              null
            )
        }


                
              </div>
                <h4 className="logout"  onClick={this.changestate}>logout</h4>
          </div>
          <Modal show={this.state.isOpen_help}
          onClose={this.toggleModal_help}>
          Here's some content for the modal
        </Modal>
        <Modal1 show={this.state.isOpen_emailview}
          onClose={this.toggleModal_emailview}>
          Here's some content for the modal
        </Modal1>
        <Modal2 show={this.state.isOpen_fileview}
          onClose={this.toggleModal_fileview}>
          Here's some content for the modal
        </Modal2>
        <Modal3 show={this.state.isOpen_notif}
          onClose={this.toggleModal_notif}>
          Here's some content for the modal
        </Modal3>
        <Modal4 show={this.state.isOpen_email}
          onClose={this.toggleModal_email}>
          Here's some content for the modal
        </Modal4>
        <Modal5 show={this.state.isOpen_file}
          onClose={this.toggleModal_file}>
          Here's some content for the modal
        </Modal5>
        <Modal6 show={this.state.isOpen_attendance}
          onClose={this.toggleModal_attendance}>
          Here's some content for the modal
        </Modal6>
        <Modal7 show={this.state.isOpen_timetable}
          onClose={this.toggleModal_timetable}>
          Here's some content for the modal
        </Modal7>
        
      
        
      </div>
      );
    }
  }
  
  export default Header_student;
  