import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
    width: 380px;
    height: 45px;
   
    border-radius: 5px;
    margin-right: 10px;
    transition: 1s;
    font-size: 28px;
    border: none;
    border-bottom: 1px solid black;
    background: inherit;
    box-shadow: 2px 2px 4px;

&:hover,
&:focus{
    outline: 2px solid orange;
}    
`

export const WrapperButton = styled.div``
export const Button = styled.button`
border: 1px solid black;
    width: 70px;
    height: 44px;
    color: #ffae06;
    background-color: inherit;
    border-radius: 10px;
    background-image: url(/srs/images/search-svgrepo-com.svg);
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    box-shadow: 1px 1px 12px;

`
