import React from 'react';
import PropTypes from 'prop-types';
var axios = require('axios');
class Modal7 extends React.Component {
  constructor(props){
    super(props);
this.state={
    username:""

};
this.submit= this.submit.bind(this);
}
submit(){
  
  this.setState({username:localStorage.getItem('username')});
  axios.post('http://192.168.43.208/6000', {
          "label":"timetableset",
          "username": this.state.username,
          "mon1":document.getElementById('mon1').value,
          "mon2":document.getElementById('mon2').value,
          "mon3":document.getElementById('mon3').value,
          "mon4":document.getElementById('mon4').value,
          "mon5":document.getElementById('mon5').value,
          "mon6":document.getElementById('mon6').value,
          "tues1":document.getElementById('tues1').value,
          "tues2":document.getElementById('tues2').value,
          "tues3":document.getElementById('tues3').value,
          "tues4":document.getElementById('tues4').value,
          "tues5":document.getElementById('tues5').value,
          "tues6":document.getElementById('tues6').value,
          "wed1":document.getElementById('wed1').value,
          "wed2":document.getElementById('wed2').value,
          "wed3":document.getElementById('wed3').value,
          "wed4":document.getElementById('wed4').value,
          "wed5":document.getElementById('wed5').value,
          "wed6":document.getElementById('wed6').value,
          "thurs1":document.getElementById('thurs1').value,
          "thurs2":document.getElementById('thurs2').value,
          "thurs3":document.getElementById('thurs3').value,
          "thurs4":document.getElementById('thurs4').value,
          "thurs5":document.getElementById('thurs5').value,
          "thurs6":document.getElementById('thurs6').value,
          "fri1":document.getElementById('fri1').value,
          "fri2":document.getElementById('fri2').value,
          "fri3":document.getElementById('fri3').value,
          "fri4":document.getElementById('fri4').value,
          "fri5":document.getElementById('fri5').value,
          "fri6":document.getElementById('fri6').value,
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
      minHeight: 400,
      minWidth:500,
      margin: '0 auto',
      padding: 30
    };
    const textstyle={
      color:'#e8491d',
      
  };
  const textfieldstyle={
    width:23,
    height:18
    
  }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        <h4 style={textstyle}>Edit Time Table</h4><hr/><br/>
            
           
        <table border="border" className="tableclass">
                                <tr className="mainheader">
                                  <th></th>
                                  <th>P1</th>
                                  <th>P2</th>
                                  <th>P3</th>
                                  <th>P4</th>
                                  <th>P5</th>
                                  <th>P6</th>

                                 </tr>
                                <tr>
                                   <th className="secondaryheader">Monday</th>
                                   <td><input type="text" style={textfieldstyle} id="mon1"/></td>
                                   <td><input type="text" style={textfieldstyle} id="mon2"/></td>
                                   <td><input type="text" style={textfieldstyle} id="mon3"/></td>
                                   <td><input type="text" style={textfieldstyle} id="mon4"/></td>
                                   <td><input type="text" style={textfieldstyle} id="mon5"/></td>
                                   <td><input type="text" style={textfieldstyle} id="mon6"/></td>
                                </tr>
                                <tr>
                                   <th className="secondaryheader">Tuesday</th>
                                   <td><input type="text" style={textfieldstyle} id="tues1"/></td>
                                   <td><input type="text" style={textfieldstyle} id="tues2"/></td>
                                   <td><input type="text" style={textfieldstyle} id="tues3"/></td>
                                   <td><input type="text" style={textfieldstyle} id="tues4"/></td>
                                   <td><input type="text" style={textfieldstyle} id="tues5"/></td>
                                   <td><input type="text" style={textfieldstyle} id="tues6"/></td>

                                </tr>
                                <tr>
                                   <th className="secondaryheader">Wednesday</th>
                                   <td><input type="text" style={textfieldstyle} id="wed1"/></td>
                                   <td><input type="text" style={textfieldstyle} id="wed2"/></td>
                                   <td><input type="text" style={textfieldstyle} id="wed3"/></td>
                                   <td><input type="text" style={textfieldstyle} id="wed4"/></td>
                                   <td><input type="text" style={textfieldstyle} id="wed5"/></td>
                                   <td><input type="text" style={textfieldstyle} id="wed6"/></td>

                                </tr>
                                 <tr>
                                   <th className="secondaryheader">Thursday</th>
                                   <td><input type="text" style={textfieldstyle} id="thurs1"/></td>
                                   <td><input type="text" style={textfieldstyle} id="thurs2"/></td>
                                   <td><input type="text" style={textfieldstyle} id="thurs3"/></td>
                                   <td><input type="text" style={textfieldstyle} id="thurs4"/></td>
                                   <td><input type="text" style={textfieldstyle} id="thurs5"/></td>
                                   <td><input type="text" style={textfieldstyle} id="thurs6"/></td>

                                </tr>
                                  <tr>
                                   <th className="secondaryheader">Friday</th>
                                   <td><input type="text" style={textfieldstyle} id="fri1"/></td>
                                   <td><input type="text" style={textfieldstyle} id="fri2"/></td>
                                   <td><input type="text" style={textfieldstyle} id="fri3"/></td>
                                   <td><input type="text" style={textfieldstyle} id="fri4"/></td>
                                   <td><input type="text" style={textfieldstyle} id="fri5"/></td>
                                   <td><input type="text" style={textfieldstyle} id="fri6"/></td>

                                </tr>


                             </table>


          <div className="footer">
          <button className="button_b2" onClick={this.okclick}>
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

Modal7.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal7;