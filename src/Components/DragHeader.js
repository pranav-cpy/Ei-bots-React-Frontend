import React, {Component} from 'react';
import ei2 from '../ei2.png';
import '../App.css';


class DragHeader extends Component{

	
    render(){
    	return (
           <div className="header_home">
      	    <div className="logo_name">
      	
      		<img src= {ei2} alt="error" className="logo"/>

      		<h1><span className="highlight">ei</span>bots</h1>
      		</div>
      
        
      </div>
    		);
    }
}
export default DragHeader;