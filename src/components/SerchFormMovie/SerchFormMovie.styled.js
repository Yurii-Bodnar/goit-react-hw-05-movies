import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
    width: 310px;
    height: 25px;
    border: none;
    outline: 2px solid black;
   border-radius: 5px;
   margin-right: 10px;
   transition: 1s;

&:hover,
&:focus{
    outline:2px solid royalblue;
}    
`
export const Button = styled.button`
border: none;
    width: 70px;
    height: 30px;
    color: white;
    background-color: steelblue;
    border-radius: 5px;
`
