import React, { Component } from 'react';
import '../App.css';

import Footer from './Footer';
import HomeHeader from './HomeHeader';
import FeatureElements from './FeatureElements';
import FeatureBody from './FeatureBody';
import DragHeader from './DragHeader';

class DragAndDropPage extends Component {
  
  render() {
    return (
      
      <div className="main">
     
      <DragHeader/>
      <FeatureElements/>
      <FeatureBody/>
      <Footer/>

     
    
      </div>
    );
  }
}

export default DragAndDropPage;
