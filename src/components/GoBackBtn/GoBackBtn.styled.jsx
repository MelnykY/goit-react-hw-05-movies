import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: block;

  border: 1px solid black;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;
  padding: 5px;
  text-align: center;
  color: #212121;

  width: 100px;
  text-decoration: none;

  &.active {
    color: #99002b;
    background-color: #ffccdc;
  }

  &:hover,
  :focus {
    color: white;
    background-color: #b30039;
  }
`;

export const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
