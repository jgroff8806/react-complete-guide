import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Complete Guide</h1>
        <p>This is a nested paragraph</p>
        <Person name="Jason" age="31" />
        <Person name="Jayson" age="32" />
        <Person name="Json" age="45" />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Is this working?'));
  }
}

export default App;
