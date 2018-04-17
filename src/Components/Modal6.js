import React from 'react';
import PropTypes from 'prop-types';
var axios = require('axios');
class Modal6 extends React.Component {
  constructor(props){
    super(props);
this.state={
    username:""

};
this.submit= this.submit.bind(this);
}
submit(){
  console.log(document.getElementById('file').value);
  this.setState({username:localStorage.getItem('username')});
  axios.post('http://192.168.43.208/6000', {
          "label":"attendancefile",
          "username": this.state.username,
          "file":document.getElementById('file').value
          
          
})
.then(function (response) {
    console.log(response);
  
   
  
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
      minWidth:400,
      minHeight: 150,
      margin: '0 auto',
      padding: 30
    };
    const buttonstyle={
      height: 40,
      marginright: 20,
    padding:10,
      background: "#35424a",
      paddingleft: 20,
      paddingright: 20,
      width:380,
      paddingtop: 5,
        
      color: "#ffffff",
      
      borderradius: 3
    };
    const textstyle={
      color:'#e8491d',
      
  };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <h4 style={textstyle}>Upload attendance file</h4><hr/><br/>
          <input id="file" style={buttonstyle} type="file"/>

          <div className="footer">
          <button className="button_b2" onClick={this.submit}>
              Save
            </button>
            <button className="button_b2" onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal6.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal6;