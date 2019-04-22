import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Jason', age: 31 }, { name: 'Jayson', age: 32 }, { name: 'Json', age: 45 }],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    this.setState({
      persons: [{ name: 'Maximilian', age: 31 }, { name: 'Jayson', age: 32 }, { name: 'Json', age: 47 }]
    });
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
  }
}

export default App;
