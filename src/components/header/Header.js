import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render(){
    return (
      <React.Fragment>
        <div id="main-logo"></div>
        <nav>
          <a id="home" href="/homes"><span>Home</span></a>
          <a id="messages" href="/messages"><span>Messages</span></a>
          <a id="wishlist" href="/wishlist"><span>Wishlist</span></a>
          <a id="settings" href="/settings"><span>Settings</span></a>
          <a id="myaccount" href="/myaccount"><span>My Account</span></a>
          <div id="search-bar">
            <input type="text" placeholder="Search"/>
          </div>
        </nav>
        <div className="clear"></div>
      </React.Fragment>
    );
  }
}

export default Header;