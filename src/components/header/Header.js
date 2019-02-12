import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


import Checkbox from './../checkbox/Checkbox'

import './Header.css';

class Header extends Component {
  render(){
    const current_page = this.props.location.pathname;
    return (
      <React.Fragment>
        <div id="main-logo"></div>
        <nav>
          <Link id="home" to="/"><span>Home</span></Link>
          <Link id="messages" to="/messages"><span>Messages</span></Link>
          <a id="wishlist" href="/wishlist"><span>Wishlist</span></a>
          <a id="settings" href="/settings"><span>Settings</span></a>
          <a id="myaccount" href="/myaccount"><span>My Account</span></a>
          <div id="search-bar">
            <div id="check-search">
              { current_page === '/' && <Checkbox /> }
            </div>
            <div>
              <input type="text" placeholder="Search"/>
            </div>
          </div>
        </nav>
        <div className="clear"></div>
      </React.Fragment>
    );
  }
}

export default withRouter(Header);