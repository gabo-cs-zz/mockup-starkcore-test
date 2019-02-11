import React, { Component } from 'react';

import Header from './components/header/Header'
import Aside from './components/aside/Aside'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <aside>
          <Aside />
        </aside>
      </div>
    );
  }
}

export default App;
