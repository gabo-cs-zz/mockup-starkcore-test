import React, { Component } from 'react';

import './Aside.css';

class Aside extends Component {
  render(){
    return (
      <div id="aside">
        <span id="top-text">Smart Filters</span>
        <div id="toggles">
        </div>
        <span id="bottom-text">Status</span>
        <div id="search-bar-aside">
          <input type="text" placeholder="Search"/>
        </div>
        <div id="status-msg">
          DELIVERED
        </div>
      </div>
    );
  }
}

export default Aside;