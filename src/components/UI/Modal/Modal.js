import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.modalShow} hide={this.props.modalHide} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.modalShow
              ? 'translateY(0)'
              : 'translateY(-100vh)',
            opacity: this.props.modalShow ? 1 : 0
          }}
        >
          <div>{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default Modal;
