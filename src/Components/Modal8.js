import React from 'react';
import PropTypes from 'prop-types';
//import e from '../notification1.png';
var axios = require('axios');
class Modal3 extends React.Component {
  

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
  padding: 15
};

// The modal "window"
const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 620,
  minWidth:880,
  margin: '0 auto',
  padding: 30
};
const textstyle={
    color:'#e8491d',
};
const imgstyle={
    margin:'auto',
    
    minWidth: 880,
    minHeight: 480
};
const button={
    height: 32,
	width: 100,
	marginright: 20,
	background:'#e8491d',
	margintop: 32,
	border: 'none',
	paddingleft: 20,
	paddingright: 20,
	paddingtop: 5,
	color: '#ffffff',
	marginleft: 50,
	marginbottom: 10,
	cursor: 'pointer',
	boxshadow:' 0 2px 0 #999',
	borderradius: 3
};

var image=localStorage.getItem('graph');


return (
  <div className="backdrop" style={backdropStyle}>
    <div className="modal" style={modalStyle}>
      <h4 style={textstyle}>Visualisation</h4>
       <hr/>
       <img src={image} style={imgstyle} alt=""/>
       <br/>
       <hr/>
       <br/>
      <div className="footer">
      <button style={button} onClick={this.props.onClose}>
          Close
        </button>
      </div>
    </div>
  </div>
);
}
}

Modal3.propTypes = {
onClose: PropTypes.func.isRequired,
show: PropTypes.bool,
children: PropTypes.node
};
export default Modal3;