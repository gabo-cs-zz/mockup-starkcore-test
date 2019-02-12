import React from 'react';
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <div className="container-wrap">
    You're trying to reach a no matching URL. You may want to go to {' '}
    <Link to="/">home</Link>
  </div>
);

export default NoMatch;