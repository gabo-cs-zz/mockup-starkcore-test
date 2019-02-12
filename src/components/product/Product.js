import React, { Component } from 'react';

import Checkbox from './../checkbox/Checkbox'

import './Product.css';

class Product extends Component {
  render(){
    return (
     <div id="product-container">
        <div id="check">
          <Checkbox />
        </div>
        <div id="product">
          <div id="columns">
            <div id="date">
              <div>Monday 10<sup>th</sup> 2:28 PM</div>
            </div>
            <div id="address">
              <div>Houston, TX, 33619</div>
              <div id="arrow-1"></div>
              <div id="arrow-2"><i className="fas fa-chevron-down fa-2x"></i></div>
              <div>Atlanta, GA, 30123</div>
            </div>
            <div id="info">
              <div >
                <i className="fas fa-truck fa-flip-horizontal fa-3x" ></i>
              </div>
              <div id="price">
                $250.00
              </div>
              <div id="amount">
                <span id="number">1</span>
              </div>
              <div id="dots">
              </div>
            </div>
          </div>
        </div>
        
        <div className="clear"></div>
      </div>
     
    );
  }
}

export default Product;