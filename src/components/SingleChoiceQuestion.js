import React from 'react'
import PropTypes from 'prop-types'

const SingleChoiceQuestion = ({question, onSelectAnswer, answer}) => {
  return (
    <div className={`Question SingleChoiceQuestion ${answer && answer.correct === false ? "wrong" : null}`}>
      <div className="Question-text">
        <span className="QuestionNumber">{question.number}. </span>
        {question.text}
      </div>
      <div className="Question-options">
        {
          question.options.map((option, index) => {
            return (
              <div key={index} className="Option-group">
                <label>
                  <input
                    type="radio"
                    name={`question-${question.number}`}
                    value={index}
                    onChange={(e) => onSelectAnswer(question, e.target.value)}
                  />
                  {option}
                </label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

SingleChoiceQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onSelectAnswer: PropTypes.func.isRequired
}

export default SingleChoiceQuestion
