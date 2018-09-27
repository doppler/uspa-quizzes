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
      grade: 0
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
    const questions = [...this.state.quiz.questions]
    const answers = {}
    const correctArr = []
    questions.forEach(question => {
      const answer = {...this.state.answers[question.number]}
      if(answer.selectedAnswer !== undefined) {
        const selectedAnswer = answer.selectedAnswer
        const correct = (selectedAnswer === question.correctAnswer)
        if (correct) correctArr.push(correct)
        answers[question.number] = { selectedAnswer, correct }
      }
    })
    const grade = Number.parseInt((100 / questions.length) * correctArr.length, 10)
    this.setState({
      ...this.state,
      answers,
      grade
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
          grade={this.state.grade}
        />
      </div>
    );
  }
}

export default App;
