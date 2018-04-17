import React, {Component} from 'react';
import ei2 from '../ei2.png';
import eye from '../eye.png';
import plus from '../plus.png';
import help from '../help.png';

import notification_white from '../notification.png';
import notification_orange from '../notification1.png';
import '../App.css';


class Home_header extends Component{

	
    render(){
    	return (
           <div className="header_home">
      	    <div className="logo_name">
      	
      		<img src= {ei2} alt="error" className="logo"/>

      		<h1><span className="highlight">ei</span>bots</h1>
      		</div>
          <div className="icon_class">
             <div className="leftpart">
                <img src= {help} alt="error" className="icons"/>
                <img src= {eye} alt="error" className="icons"/>

                <img src= {notification_white} alt="error" className="icons1"/>
                <img src= {plus} alt="error" className="icons1"/>
              </div>
                <h3 className="logout" >logout</h3>
          </div>
      
        
      </div>
    		);
    }
}
export default Home_header;