import React, { Component } from 'react';
import './chatBox.css';

class ChatBox extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <div className="col-md-12 chat-box-container">
          <div className="chat-box"></div>
          <textarea></textarea>
        </div>
      </div>
    );
  }
}

export default ChatBox;
