import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  padding: 16px 24px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orange;
    border: 1px solid black;
    box-shadow: 1px 1px 11px;
    /* background-color: steelblue; */
  }
`;