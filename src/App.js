import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [{ name: 'Jason', age: 31 }, { name: 'Jayson', age: 32 }, { name: 'Json', age: 45 }]
  });

  const [otherState, setOtherState] = useState({
    otherState: 'some other value'
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [{ name: 'Maximilian', age: 31 }, { name: 'Jayson', age: 32 }, { name: 'Json', age: 47 }]
    });
  };

  return (
    <div className="App">
      <h1>React Complete Guide</h1>
      <p>This is a nested paragraph</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
        My Hobbies: Being confused with Jason
      </Person>
    </div>
  );
};

export default app;
