import React from 'react'
import PropTypes from 'prop-types'
import SingleChoiceQuestion from './SingleChoiceQuestion'

const Header = ({children}) =>
  <div className="Header">
    {children}
  </div>

const Quiz = props => {

  const { quiz, onGradeQuiz, answers } = props

  return (
    <div className="Quiz">
      <Header><h1>Quiz Header</h1></Header>
      <div className="Questions">
        {
          quiz.questions.map(question => {
            let Element = null
            const answer = answers[question.number]
            switch(question.type) {
              case "singleChoice":
                Element = SingleChoiceQuestion
                break
              default:
                break
            }
            return <Element key={question.number} question={question} answer={answer} {...props}/>
          })
        }
      </div>
      <button onClick={onGradeQuiz}>Grade Quiz</button>
    </div>
  )
}

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  onGradeQuiz: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired
}

export default Quiz
