import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => (props.primary ? 'green' : 'white')};
  color: ${props => (props.primary ? 'white' : 'green')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  display: flex;
`;
export const Title = styled.h1`
  color: #212121;
  font-family: 'Moncerrat', sans-serif;
  font-size: 24px;
  line-height: 2;
  font-weight: 700;
  text-transform: uppercase;
`;
export const TitleSecond = styled.h2`
  color: #000080;
  font-size: 16px;
  line-height: 1.2;
`;
export const List = styled.ul`
  list-style: none;
  color: #2f4f4f;
  display: flex;
`;
export const ListResult = styled.ul`
  list-style: none;
  color: #2f4f4f;
`;

export const Item = styled.li`
  font-size: 18px;
  line-height: 1.14;
`;
export const Notific = styled.h3`
  color: #dc143c;
  font-size: 18px;
  line-height: 1.14;
`;
export const Container = styled.div`
  padding: 20px;
  background-color: #ffe4b5;
  width: 500px;
  height: 650px;
`;
