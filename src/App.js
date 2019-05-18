import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
