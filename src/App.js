import React, { Component } from 'react';
import HomePage from './home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
