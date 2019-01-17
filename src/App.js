import React, { Component } from 'react';
import './App.css';

import Persons from './Persons/Persons';




class App extends Component {
  state = { 
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stefanie', age: 26 }
    ] 
  };
  
  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Persons persons={this.state.persons}/>
      </div>
    );
  }
}

export default App;
