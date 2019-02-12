import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

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
          <Link id="wishlist" to="/wishlist"><span>Wishlist</span></Link>
          <Link id="settings" to="/settings"><span>Settings</span></Link>
          <Link id="myaccount" to="/myaccount"><span>My Account</span></Link>
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