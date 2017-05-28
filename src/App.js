import React, { Component } from 'react'

//State
import { Provider } from "react-redux"
import store from "./state"

//Styles
import muiTheme from './styles/theme'
import logo from './logo.svg'
import './App.css'
import './styles/bootstrap/bootstrap.min.css'

//Components
import MessageBox from './components/messageBox'
import Sidebar from './components/sidebar'

//Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from 'material-ui/AppBar'
import {cyan500} from 'material-ui/styles/colors'


class App extends Component {
  
  constructor(){
    injectTapEventPlugin()
    
    super()
  }

  render() { 
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <Provider store={store}>
           
          <div className="App container-fluid">
            <div className="col-md-3">
              <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
              <MessageBox></MessageBox>
            </div>       
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}


export default App;
