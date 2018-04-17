import React, { Component } from 'react';
import '../App.css';
import Header from './Header_student';
import Home_chat_student from './Home_chat_student';
import HomeCalender from './HomeCalender';
import HomeQuery_student from './HomeQuery_student';
import Footer from './Footer';

class StudentHomePage extends Component {
  
  render() {
    return (
      
      <div className="main">
     
       <div className="home_body">
      <Header/>
      <Home_chat_student/>
      <div className="calandq">
      <HomeCalender/>
      <HomeQuery_student/>
      </div>
      </div>
      <Footer/>

     
    
      </div>
    );
  }
}

export default StudentHomePage;
