import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;
export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.75);
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
