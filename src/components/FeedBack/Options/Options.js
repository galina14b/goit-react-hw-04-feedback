import css from "./Options.module.css"
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <div className={css.buttons}>
    {options.map(option => {
      return <li key={option}><button name={option} onClick={onLeaveFeedback}>{option}</button></li>
    })}
  </div>
}

export default FeedbackOptions

FeedbackOptions.prototypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}