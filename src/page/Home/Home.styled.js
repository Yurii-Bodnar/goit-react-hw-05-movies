import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
`;
export const Item = styled.li`
  
  text-align: center;
  border-radius: 5px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 17px;
  font-weight: bolder;
`;
export const Img = styled.img`
  border-radius: 5px;
  box-shadow: 0 0 19px;
  height: 425px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{

  transform: scale(1.03);
  cursor: pointer;

  }
`;
