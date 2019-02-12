import React from 'react';

import './Checkbox.css';

const Checkbox = () => (
  <label className="container">
    <input type="checkbox" checked="checked" />
    <span className="checkmark"></span>
  </label>
);

export default Checkbox;