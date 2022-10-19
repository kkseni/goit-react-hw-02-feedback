import React from 'react';
import { TitleSecond, ListResult } from './Feedback.Styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercent,
}) {
  console.log(`neutral`, neutral);
  return (
    <div>
      <TitleSecond>Statistics</TitleSecond>
      <ListResult>
        <Item>Good:{good}</Item>
        <Item>Neutral:{neutral}</Item>
        <Item>Bad:{bad}</Item>
        <Item>Total:{total}</Item>
        <Item>Positive feedback:{positivePercent}%</Item>
      </ListResult>
    </div>
  );
}
