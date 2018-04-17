import React, {Component} from 'react';
import '../App.css';
class FeatureBody extends Component{
	render(){
		return(
		   <div className="feature_drop_section">

                 <div className="drop_region">

                      <h1>drop region</h1>

                 </div>
                
                 <div className="save_section">
                 <input type="text" className="text_box_sign" placeholder="feature command"/>
                
                 <button type="submit" className="button_b2" > add </button>
                  </div>

		   </div>
			);
	}
}

export default FeatureBody;
