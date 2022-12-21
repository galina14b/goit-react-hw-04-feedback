import css from "./Options.module.css"
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <div className={css.buttons}>
    {options.map(option => {
      return <li key={option}><button name={option} onClick={onLeaveFeedback}>{option}</button></li>
    })}
  </div>
}

export default FeedbackOptions