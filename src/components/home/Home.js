import React, { Component } from 'react';

import Product from './../product/Product'
import Floating from './../floating/Floating'

class Home extends Component {
  render(){
    return (
      <div className="container-wrap">
        <Product />
        <Product />
        <Product />
        <Floating />
      </div>
      
    );
  }
}

export default Home;