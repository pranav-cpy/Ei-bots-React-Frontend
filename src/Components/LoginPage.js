import React, { Component } from 'react';
import '../App.css';
import Header1 from './Header1';
import Bodypart from './Bodypart';
import Footer from './Footer';
import Features from './Features';
import Subscribe from './Subscribe';
import Head1 from './Header_student';


class LoginPage extends Component {
  
  render() {
    return (
      
      <div className="main">
     
      <Header1/>
      
      <Bodypart/>
      <Subscribe/>
      <Features/>
      <Footer/>
   
    
    
      </div>
    );
  }
}

export default LoginPage;
