import React from "react";
import Statistic from "./FeedBack/Statistic/Statistic";
import FeedbackOptions from "./FeedBack/Options/Options";
import Notification from "./FeedBack/Notification/Notification";
import Section from "components/Section/Section";
import css from "./App.module.css"

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    let num = e.currentTarget.name;
    if (num === 'good') {
      this.setState(prevState => ({
      good: prevState.good + 1
      }))
    }
    if (num === 'neutral') {
      this.setState(prevState => ({
      neutral: prevState.neutral + 1
      }))
    }
    if (num === 'bad') {
      this.setState(prevState => ({
      bad: prevState.bad + 1
      }))
    }
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return(this.state.good/this.countTotalFeedback() * 100)
  }

  render() {
    return (
      <div className={css.block}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)}
                         onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() ?
            (<Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />) : (<Notification message="There is no feedback"/>)}
        </Section>
      </div>
    )
  }
} 

export { App }