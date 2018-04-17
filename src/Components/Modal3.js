import React from 'react';
import PropTypes from 'prop-types';
var axios = require('axios');
class Modal3 extends React.Component {
  constructor(props){
    super(props);
this.email=[];
this.state={
    loaded:false,
    username:""

}
}
componentDidMount() {
  this.setState({username:localStorage.getItem('username')});
    axios.post('http://192.168.43.208/6000', {
          "label":"notifications",
          "username": this.state.username,
          
})
.then(function (response) {
    console.log(typeof response.data);
    this.email = response.data;
  
    console.log(this.email);
    this.setState({loaded: true});
  
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
  minWidth:700,
  margin: '0 auto',
  padding: 30
};
const textstyle={
    color:'#e8491d',
};


let list = [];
if (this.state.loaded) {
    for (let e in this.email) {
        
        list.push(
            <div>
            <h5 style={textstyle}>{this.email[e]}</h5><br/></div>

        );
    }
} 

return (
  <div className="backdrop" style={backdropStyle}>
    <div className="modal" style={modalStyle}>
      <h4 style={textstyle}>Notifications</h4>
       <hr/>
       {list}
      <div className="footer">
      <button className="button_b2" onClick={this.props.onClose}>
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