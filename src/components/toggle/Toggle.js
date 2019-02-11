import React from 'react';
import './Toggle.css';

const Toggle = (props) => (
  <div id="main-toggle">
    <div id="toggle-img">
      <img src={props.source}/>
    </div>
    <div id="toggle">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
    <div className="clear"></div>
  </div>
);

export default Toggle;