import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Home from './components/main/home/Home'
import Message from './components/main/message/Message'
import Wishlist from './components/main/wishlist/Wishlist'
import Settings from './components/main/settings/Settings'
import MyAccount from './components/main/myaccount/MyAccount'
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
              <Route exact path='/wishlist' component={Wishlist} />
              <Route exact path='/settings' component={Settings} />
              <Route exact path='/myaccount' component={MyAccount} />
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
