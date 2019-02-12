import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Home from './components/home/Home'
import Message from './components/message/Message'
import NoMatch from './components/nomatch/NoMatch'

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
        <Router>
          <div className="App">
            <header className="App-header">
              <Header />
            </header>
            <aside>
              <Aside />
            </aside>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/messages' component={Message} />
              <Route component={NoMatch} />
            </Switch>
            <div className="clear"></div>
          </div>
        </Router>
      );
    }
    return(<p>Please wait...</p>);
  }
}

export default App;
