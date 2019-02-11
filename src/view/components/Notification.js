import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Notification {

  options = {
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: false,
    type: 'info',
    autoClose: false
  };

  getMessage = (type, message, id) => {
    switch (type) {
      case 'success':
        return (<div className='message' id={`notification${id}`}><FontAwesomeIcon icon='check-circle' /> {message} </div>);
      case 'error':
        return (<div className='message' id={`notification${id}`}><FontAwesomeIcon icon={['far', 'times-circle']} /> {message} </div>);
      case 'warning':
        return (<div className='message' id={`notification${id}`}><FontAwesomeIcon icon='exclamation-circle' /> {message} </div>);
      case 'info':
        return (<div className='message' id={`notification${id}`}><FontAwesomeIcon icon='info-circle' /> {message} </div>);
      default:
        return null;
    }
  }

  addMessage = (type, message, id = 1, time = 3500) => {
    this.options.type = type;
    this.options.autoClose = time;
    toast(this.getMessage(type, message, id), this.options);
  }

  addMessageNextPage = (type, message, id = 1) => {
    this.options.type = type;
    toast(this.getMessage(type, message, id), this.options);
  }
}

export default new Notification();