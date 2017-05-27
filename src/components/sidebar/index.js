import React, { Component } from 'react'
import { connect } from "react-redux"
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

import action from './action'
import './sidebar.css'

class Sidebar extends React.Component {

  constructor(){   
    super()
  }

  toggleSidebar(){
    this.props.dispatch(action());
  }

  render() {
    return (
        <div> 
          <RaisedButton
            label="Toggle Drawer"
            onTouchTap={this.toggleSidebar.bind(this)}
          />
          <Drawer open={this.props.sidebar.sidebar.open}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
    );
  }
}

export default connect(store => {
  return {
    sidebar: store.sidebar
  };
})(Sidebar);