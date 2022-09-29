import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
`;

export const Item = styled.li`
  box-shadow: 0 0 19px;
  text-align: center;
  border-radius: 5px;
`;

export const Img = styled.img `
border-radius: 5px;
`
