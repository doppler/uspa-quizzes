import React from 'react'
import PropTypes from 'prop-types'
import SingleChoiceQuestion from './SingleChoiceQuestion'

const Header = ({children}) =>
  <div className="Header">
    {children}
  </div>

const Quiz = ({ quiz }) => {
  return (
    <div className="Quiz">
      <Header><h1>Quiz Header</h1></Header>
      <div className="Questions">
        {
          quiz.questions.map(question => {
            let Element = null
            switch(question.type) {
              case "singleChoice":
                Element = SingleChoiceQuestion
                break
              default:
                break
            }
            return <Element key={question.number} question={question}/>
          })
        }
      </div>
    </div>
  )
}

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired
}

export default Quiz
