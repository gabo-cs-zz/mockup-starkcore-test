import React, { Component } from 'react';

import Product from './../product/Product'

import './Home.css';

class Home extends Component {
  render(){
    return (
      <div id="home-container">
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Home;