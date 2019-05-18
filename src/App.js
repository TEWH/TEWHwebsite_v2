import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Page imports
import HomePage from './home/Home';
import Supporters from './supporters/Supporters'

const Sample = () => {
  return (
    <h1>PLEASE WORK I'M BEGGING YOU</h1>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/supporters" component={Supporters} />
          <Route path="/projects" component={Sample} />
          <Route path="/mr" component={Sample} />
          <Route path="/contact" component={Sample} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
