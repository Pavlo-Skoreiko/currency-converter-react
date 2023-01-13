import styled from "styled-components";

export const Button = styled.button`
  width: 95%;
  text-align: center;
  border: none;
  background-color: hsl(209, 67%, 27%);
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 5px;
  cursor: pointer;

  &:hover {
    background-color: hsl(209, 61%, 59%);
  }

  &:active {
    background-color: hsl(209, 51%, 65%);
  }
`;
