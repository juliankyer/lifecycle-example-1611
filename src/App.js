import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './Card';

class App extends Component {
  constructor() {
    super()
    this.state = { totalStudents: 18 }
  }


  render() {
    console.log('Render');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Card  students={ this.state.totalStudents }/>
      </div>
    );
  }
}

export default App;
