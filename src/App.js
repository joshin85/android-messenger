import React, { Component } from 'react'

//State
import { Provider } from "react-redux"
import store from "./state"

//Components
import ChatBox from './components/chatBox'
import MessageBox from './components/messageBox'
import Sidebar from './components/sidebar'

//Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor(){
    injectTapEventPlugin()
    super()
  }

  render() { 
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <div className="App container">
            <div className="col-md-3">
              <MessageBox></MessageBox>
            </div>
            <div className="col-md-9">
              <Sidebar></Sidebar>
              <ChatBox></ChatBox>
            </div>       
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
