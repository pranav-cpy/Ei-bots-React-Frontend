import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
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
      maxWidth: 700,
      minHeight: 450,
       minWidth:600,
      margin: '0 auto',
      padding: 30
    };
    const textstyle={
        color:'#e8491d',
    };
    const s1={
      color:'#000000',
  };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          
         <p style={textstyle}>Ei Help </p><hr/>
         <p style={s1}>EiBot is an AI powered bot that provide services for helping teachers to ease their work.<br/>You can Upload student data and record attendance, analyse student performance, answer student queries etc.<br/>Feel bored to text ? Use your voice instead. <br/>Use chrome for better experience. </p> 
          <br/>
         <p style={textstyle}>About Us</p><hr/>
         <p style={s1}>Pranav <br/> Gopi <br/> Midhun <br/></p>
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;