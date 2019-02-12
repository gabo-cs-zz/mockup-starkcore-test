import React, { Component } from 'react';

import Product from './../product/Product'

class Home extends Component {
  render(){
    return (
      <div className="container-wrap">
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Home;