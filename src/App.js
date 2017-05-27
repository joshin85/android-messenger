import React, { Component } from 'react'
import { Provider } from "react-redux"

//State
import store from "./State"

//Components
import ChatBox from './Components/ChatBox/ChatBox'
import MessageBox from './Components/MessageBox/MessageBox'
import Sidebar from './Components/Sidebar/Sidebar'

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
