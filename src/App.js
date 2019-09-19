import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Component imports
import RealNavBar from './components/RealNavbar'
import Footer from './components/Footer'
import HomePage from './home/Home';
import Supporters from './supporters/Supporters'
import Contact from './contact/contact'
import Projects from './projects/Projects';
import member_resources from './member_resources/member_resources';

const Sample = () => {
  return (
    <h1>PLEASE WORK I'M BEGGING YOU</h1>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <RealNavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/supporters" component={Supporters} />
            <Route path="/projects" component={Projects} />
            <Route path="/mr" component={member_resources} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
