import React from 'react';
import { Button, Wrapper, List, Item } from './Feedback.Styled';

export default function FeedbackOptions({ onleaveFeedback }) {
  return (
    <>
      <Wrapper>
        <List>
          <Item>
            <Button onClick={() => onleaveFeedback('good')}>Good</Button>
          </Item>
          <Item>
            <Button onClick={() => onleaveFeedback('neutral')}>Neutral</Button>
          </Item>
          <Item>
            <Button onClick={() => onleaveFeedback('bad')}>Bad</Button>
          </Item>
        </List>
      </Wrapper>
    </>
  );
}
