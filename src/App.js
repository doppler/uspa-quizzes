import React, { Component } from 'react';
import Quiz from './components/Quiz'
import './App.css';

import Quizzes from './quizzes.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quiz quiz={Quizzes['Category A']}/>
      </div>
    );
  }
}

export default App;
