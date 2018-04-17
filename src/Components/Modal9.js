import React from 'react';
import PropTypes from 'prop-types';
var axios = require('axios');
class Modal9 extends React.Component {
  constructor(props){
    super(props);
    this.state={
       username:"",
       errormsg:""
    }
    this.okclick= this.okclick.bind(this);
  }
  okclick(){
    var that=this;
    console.log(document.getElementById('area').value);
    if(document.getElementById('area').value ===""||document.getElementById('fname').value===""||document.getElementById('gname').value==""){
      this.setState({errormsg:"enter all fields"});
    }
    if(document.getElementById('area').value !=="" && document.getElementById('fname').value!=="" && document.getElementById('gname').value!==""){
      this.setState({errormsg:""});
    }
    this.setState({username:localStorage.getItem('username')});
    axios.post('http://192.168.43.208/6000', {
          "label":"emailgroup",
          "username": this.state.username,
          "name":document.getElementById('fname').value,
          "emailgrp":document.getElementById('gname').value,
          "questions":document.getElementById('area').value
          
})
.then(function (response) {
    console.log(response);
    document.getElementById('area').value="";
    document.getElementById('name').value="";
   
  
})
.catch(function (error) {
  console.log("no data yet");
  console.log(error);
  
  
});

  }
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 400,
      minWidth:400,
      margin: '0 auto',
      padding: 30
    };
    const areastyle={
      height: 100,
	   borderbottom: 20,
   	width: 280,
	  marginbottom: 30,
    marginright: 20,
    fontsize: 12
    };
    const textstyle={
      color:'#e8491d',
      
  };
  const feedback={
  
	color: "#e8491d",
	margintop: 0,
	marginleft: 100

  };
  

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <h4 style={textstyle}>Create feedback</h4><hr/><br/>
        <input type="text" name="feedbackname" placeholder="feedback name" id="fname" className="text_box_sign"/>
        <input type="text" name="grpname" placeholder="email group name" id="gname" className="text_box_sign"/>
        <textarea placeholder="questions" id="area" style={areastyle}/>

          <div className="footer">
            <button className="button_b2" onClick={this.okclick}>
              Save
            </button>
            <button className="button_b2" onClick={this.props.onClose}>
             Close
             </button>
             <h6 style={feedback}>{this.state.errormsg}</h6>
          </div>
        </div>
      </div>
    );
  }
}

Modal9.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal9;