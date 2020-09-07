import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


/**
 * class-based components (also referred to as "containers", "smart" or "stateful" components)
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <Person />
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
