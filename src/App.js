import React, { useState } from 'react';
import './App.css';

import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';


/**
 * class-based components (also referred to as "containers", "smart" or "stateful" components)
 */
const App = (props) => {
  const [personsState, setPersonState ] = useState({
    persons: [
      {
        name: 'Suman',
        age: 28
      },
      {
        name: 'Nupur',
        age: 26,
        hobbies: 'Cooking'
      }
    ],
    showPerson: false
  });
  const switchNameHandler = (name, index) => {
    const persons = [...personsState.persons];
    persons[index] = {
      ...persons[index],
      name
    };
    /**
     * this.setState merge the object while setPersonState replace the complete object,
     * better to take slice of the object, if you need limited object to update
     */
    setPersonState({
      ...personsState,
      persons
    });
  }

  const toggleVisibility = () => {
    setPersonState({
      ...personsState,
      showPerson: !personsState.showPerson
    });
  }

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button style={style} onClick={toggleVisibility}>Show/Hide Person</button>
        { personsState.showPerson ?
            personsState.persons.map((p, index) => (
              // <Person key={p.name} name={p.name} age={p.age} click={switchNameHandler.bind(this, 
              //   'Suman Kumar Jha')}>Hobbies: {p.hobbies || 'Racing'}</Person>
              <Person key={p.name} name={p.name} age={p.age} click={(evt) => switchNameHandler(evt, index)}>Hobbies: {p.hobbies || 'Racing'}</Person>
            )) :
            null
        }
      </div>
    </StyleRoot>
  );
}

export default Radium(App);


/*
state = {
    persons: [
      {
        name: 'Suman',
        age: 28
      },
      {
        name: 'Nupur',
        age: 26,
        hobbies: 'Cooking'
      }
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      {
        name: 'Suman Jha',
        age: 28
      },
      {
        name: 'Nupur Jha',
        age: 26,
        hobbies: 'Cooking'
      }
    ]});
  }
  */