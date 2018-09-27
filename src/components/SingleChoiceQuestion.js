import React from 'react'
import PropTypes from 'prop-types'

const SingleChoiceQuestion = ({question, selectAnswer}) => {
  return (
    <div className="Question SingleChoiceQuestion">
      <div className="Question-text">
        <span className="QuestionNumber">{question.number}. </span>
        {question.text}
      </div>
      <div className="Question-options">
        {
          question.options.map((option, index) => {
            return (
              <div key={index} className="Option-group">
                <input
                  type="radio"
                  name={`question-${question.number}`}
                  value={index}
                  onChange={(e) => selectAnswer(question, e.target.value)}
                />
                <span className="Option-text">{option}</span>
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
  selectAnswer: PropTypes.func.isRequired // probably gonna get rid of this
}

export default SingleChoiceQuestion
