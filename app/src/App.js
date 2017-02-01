/*
* OffGrid Talkie
*
* Copyright (c) 2017 OffGrid Networks. All Rights Reserved.
* SEE LICENSE
*/

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.css';
import { OGNAppBar, OGNSideBar, OGNConversationSurface } from 'offgrid-components'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <OGNAppBar />
        <OGNSideBar >
          <ul>
            <li className="ogn-sidebar-item App-sidebar-heading">Connected</li>
            <li className="ogn-sidebar-item App-sidebar-item"><a href="#">Shout</a></li>
          </ul>
        </OGNSideBar>
        <OGNConversationSurface id="chat" />
      </div>
    );
  }
}

export default inject('store')(observer(App))
