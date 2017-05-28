import React, { Component } from 'react'
import { connect } from "react-redux"
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'

import {List, ListItem} from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'
import AppBar from 'material-ui/AppBar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import Badge from 'material-ui/Badge'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'




import {
  lightBlue500,
  grey200
} from 'material-ui/styles/colors';

import action from './action'
import './sidebar.css'

const style = {margin: 5};

class Sidebar extends React.Component {

  constructor(){   
    super()
  }

  toggleSidebar(){
    this.props.dispatch(action()); 
  }

  render() {
    return (
        <div className="sidebar"> 
            <AppBar title="Contacts"
              zDepth={0}></AppBar> 
            <List>   
                <ListItem
                  leftAvatar={<Avatar icon={
                    <CommunicationChatBubble />} />}
                  rightAvatar={
                    <Badge
                      badgeContent={4}
                      primary={true}
                    >
                    </Badge>}
                  primaryText="Shinjo Melosh"
                  secondaryText="Jan 9, 2014"
                />
            </List>
        </div>
    );
  }
}

export default connect(store => {
  return {
    sidebar: store.sidebar
  };
})(Sidebar);