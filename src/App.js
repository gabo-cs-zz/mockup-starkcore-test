import React, { Component } from 'react';

import Header from './components/header/Header'
import Aside from './components/aside/Aside'

import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = { 
      loading: true,
    }
  }

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 10); 
  }
  
  componentWillUnmount(){
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }
  
  render() {
    if(!this.state.loading){
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
    return(<p>Please wait...</p>);
  }
}

export default App;
