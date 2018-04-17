import React, { Component } from 'react';
import '../App.css';
import HomeHeader from './HomeHeader';
import HomeChat from './HomeChat';
import HomeCalender from './HomeCalender';
import HomeQuery from './HomeQuery';
import Footer from './Footer';
import H from './Testheader';

class TeacherHomePage extends Component {
  
  render() {
    return (
      
      <div className="main">
     
       <div className="home_body">
     {/* <HomeHeader/>*/}
    <H/>
     <HomeChat/>
      <div className="calandq">
      
     <HomeCalender/>
      <HomeQuery/>
      </div>
      </div>
      <Footer/>

     
    
      </div>
    );
  }
}

export default TeacherHomePage;
