import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`

 margin-right: 10px;
  padding: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;

  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: white;
  
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;
  &:hover {
   background-color:rgb(44, 154, 243);
   box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5); 
  }
  `