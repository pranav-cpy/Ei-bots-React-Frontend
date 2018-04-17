

import React, { Component } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import DragAndDropPage from './Components/DragAndDropPage';
import TeacherHomePage from './Components/TeacherHomePage';
class App extends Component{
  render(){
    return(
        <div>
          <LoginPage/>
          <TeacherHomePage/>
          <DragAndDropPage/>
        </div>
      )
  }
}
/*import Header1 from './Components/Header1';
import Bodypart from './Components/Bodypart';
import Footer from './Components/Footer';
import Subscribe from './Components/Subscribe';
import HomeHeader from './Components/HomeHeader';
import HomeChat from './Components/HomeChat';
import HomeCalender from './Components/HomeCalender';
import HomeQuery from './Components/HomeQuery';
import Features from './Components/Features';
import FeatureElements from './Components/FeatureElements';
import FeatureBody from './Components/FeatureBody';

class App extends Component {
  
  render() {
    return (
      
      <div className="main">
     
      <Header1/>
      
      <Bodypart/>
      <Subscribe/>
      <Features/>
      <Footer/>
    
       <div className="home_body">
      <HomeHeader/>
     
     
   
      <HomeChat/ >
      <div className="calandq">
      <HomeCalender/>
      <HomeQuery/>
      </div>
      </div>
      <Footer/>




      <Header1/>
      <FeatureElements/>
      <FeatureBody/>
      <Footer/>

     
    
      </div>
    );
  }
}*/

export default App;
