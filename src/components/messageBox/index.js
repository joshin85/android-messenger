import React, { Component } from 'react'
import './messageBox.css'
import IconButton from 'material-ui/IconButton'

import ChatBox from '../chatBox'
import AppBar from 'material-ui/AppBar'

class MessageBox extends Component {

  constructor(){
    super();
  }

  render() {
    return (
        <div>
            <AppBar title="Shinjo Melosh"
              zDepth={0}
              iconElementLeft={<IconButton></IconButton>}>
            </AppBar>
            <div>

            </div>
            <div>
              <ChatBox></ChatBox>
            </div>
        </div>
    );
  }
}

export default MessageBox;
