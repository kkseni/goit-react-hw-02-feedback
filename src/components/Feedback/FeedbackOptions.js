import React from 'react';
import { Button, Wrapper, List, Item } from './Feedback.Styled';

export default function FeedbackOptions({ options, onleaveFeedback }) {
  return (
    <>
      <List>
        {options.map(option => {
          return (
            <Button
              type="button"
              key={option}
              onClick={() => onleaveFeedback(option)}
            >
              {option}
            </Button>
          );
        })}
      </List>
    </>
  );
}
