import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


/**
 * class-based components (also referred to as "containers", "smart" or "stateful" components)
 */
class App extends Component {
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {
          this.state.persons.map(p => (
            <Person key={p.name} name={p.name} age={p.age}>Hobbies: {p.hobbies || 'Racing'}</Person>
          ))
        }
      </div>
    );
    /**
     * @example Above code compiles to below code
     */
    // return React.createElement('div', {
    //   className: 'App'
    // }, React.createElement('h1', null, 'Hi, I\'m a react app!'));
  }
}

export default App;
