import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Statistics from 'components/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodHandle = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralHandle = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badHandle = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodHandle={this.goodHandle}
            onNeutralHandle={this.neutralHandle}
            onBadHandle={this.badHandle}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotal()}
            positivePercentage={this.countPositivePercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
