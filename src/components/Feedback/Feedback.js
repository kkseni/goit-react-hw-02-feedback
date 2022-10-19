import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Notific } from './Feedback.Styled';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(propertyName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propertyName];
    const result = value / 100;
    return result;
  }
  onleaveFeedback = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = ['good', 'neutral', 'bad'];
    const positivePercent = this.countPositiveFeedbackPercentage('result');

    return (
      <Container>
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          onleaveFeedback={this.onleaveFeedback}
          options={options}
        />
        <div>
          {!total ? (
            <Notific>There is no feedback</Notific>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveRercent={positivePercent}
            >
              key={options}
            </Statistics>
          )}
        </div>
      </Container>
    );
  }
}
Feedback.propTypes = {
  option: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveRercent: PropTypes.number,
};
