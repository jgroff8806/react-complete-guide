import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Jason', age: 31 }, { name: 'Json', age: 45 }, { name: 'Jayson', age: 32 }],
    otherState: 'some other value'
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [{ name: newName, age: 31 }, { name: 'Json', age: 45 }, { name: 'Jayson', age: 33 }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [{ name: 'Jason', age: 31 }, { name: event.target.value, age: 45 }, { name: 'Jayson', age: 32 }]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Complete Guide</h1>
        <p>This is a nested paragraph</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximilian!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Being confused with Jason
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
