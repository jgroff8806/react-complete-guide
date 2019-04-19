import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Jason', age: 31 }, { name: 'Jayson', age: 32 }, { name: 'Json', age: 45 }]
  };

  switchNameHandler = () => {
    console.log('Clicked');
  };

  render() {
    return (
      <div className="App">
        <h1>React Complete Guide</h1>
        <p>This is a nested paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          My Hobbies: Being confused with Jason
        </Person>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Is this working?'));
  }
}

export default App;
