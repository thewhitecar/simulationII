import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header'
import Dashboard from './component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'
import House from './component/House/House'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard>
        <House/>
        </Dashboard>
        <Wizard/>
      </div>
    );
  }
}

export default App;
