import React from "react";
import { useState } from "react";

import Statistic from "./FeedBack/Statistic/Statistic";
import FeedbackOptions from "./FeedBack/Options/Options";
import Notification from "./FeedBack/Notification/Notification";
import Section from "components/Section/Section";
import css from "./App.module.css"

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    let num = e.currentTarget.name;
    if (num === 'Good') {
      setGood(prevState => (prevState + 1))

    }
    if (num === 'Neutral') {
      setNeutral(prevState => (prevState + 1))
    }
    if (num === 'Bad') {
      setBad(prevState => (prevState + 1))
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return(good/countTotalFeedback() * 100)
  }

  return (
      <div className={css.block}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']}
                         onLeaveFeedback={onLeaveFeedback}
          />
          {countTotalFeedback() ?
            (<Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />) : (<Notification message="There is no feedback"/>)}
        </Section>
      </div>
  )
  
} 

export { App }