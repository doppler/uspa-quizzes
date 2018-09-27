import React, { Component } from 'react';
import Quiz from './components/Quiz'
import './App.css';

import Quizzes from './quizzes.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: Quizzes['Category A'],
      answers: {},
      grading: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
    this.gradeQuiz = this.gradeQuiz.bind(this)
  }

  selectAnswer(question, answer) {
    const number = question.number
    const selectedAnswer = Number.parseFloat(answer, 10)
    const correctAnswer = this.state.quiz.questions.find(question => question.number === number).correctAnswer
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers,
        [number]: {
          selectedAnswer,
          correctAnswer,
          correct: selectedAnswer === correctAnswer
        }
      }
    })
  }

  gradeQuiz() {
    this.setState({
      grading: true
    })
  }

  render() {
    return (
      <div className="App">
        <Quiz
          quiz={this.state.quiz}
          onSelectAnswer={this.selectAnswer}
          onGradeQuiz={this.gradeQuiz}
          answers={this.state.answers}
          grading={this.state.grading}
        />
      </div>
    );
  }
}

export default App;
