import React, {Component} from 'react';
import ei2 from '../ei2.png';
import '../App.css';
class Footer extends Component{
	render(){
		return(
			
			<div className="footer_section">

			<img src= {ei2} alt="error" className="logo_footer"/>
			
              <p> ei bots , Copy Right &copy; 2018 </p>
              

               </div>
             
			);
	}
}

export default Footer;
