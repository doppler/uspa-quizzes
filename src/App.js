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
    }
    this.handleSelectAnswer = this.handleSelectAnswer.bind(this)
    this.gradeQuiz = this.gradeQuiz.bind(this)
  }

  handleSelectAnswer(question, answer) {
    const selectedAnswer = Number.parseFloat(answer, 10)
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers,
        [question.number]: {
          selectedAnswer
        }
      }
    })
  }

  gradeQuiz() {
    console.log("in gradeQuiz")
    const answers = {}
    this.state.quiz.questions.forEach(question => {
      const answer = {...this.state.answers[question.number]}
      if(answer.selectedAnswer !== undefined) {
        const selectedAnswer = answer.selectedAnswer
        const correct = (selectedAnswer === question.correctAnswer)
        answers[question.number] = { selectedAnswer, correct }
      }
    })
    this.setState({
      ...this.state,
      answers
    })
  }

  render() {
    return (
      <div className="App">
        <Quiz
          quiz={this.state.quiz}
          onSelectAnswer={this.handleSelectAnswer}
          onGradeQuiz={this.gradeQuiz}
          answers={this.state.answers}
        />
      </div>
    );
  }
}

export default App;
