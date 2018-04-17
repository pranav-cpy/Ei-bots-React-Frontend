import React, {Component} from 'react';
import '../App.css';
import support from '../support.png';
import analyse from '../Analyse.png';
import drag from '../drag.png';
import automate from '../automation.png';

class Features extends Component{
	render(){
		return(
			<div className="feature_section">
			
	{	/*	<div className="box1">
				<img src={drag} alt="" className="feature_image"/>
				<br/>
			 <h3> Drag and drop</h3>
			 <p>Hate programming?<br/> Do not worry.</p>
			</div>
			*/}

			
			<div className="box1">
				<img src={automate} alt="" className="feature_image"/>
			 <h3> Automate</h3>
			 <p>Automate your works with ease <br/>and effectiveness.</p>
			</div>

			<div className="box1">
				<img src={analyse} alt="" className="feature_image"/>
			 <h3> Analysis</h3>
			 <p>Analyse student performance <br/>using AI</p>
			</div>

			<div className="box1">
			<img src={support} alt="" className="feature_image"/>
			 <h3> Support</h3>
			 <p>Need help?<br/> 24 * 7 support !</p>
			</div>

		</div>

			);
	}
}

export default Features;
