import styled from "styled-components";

export const Reset = styled.button`
  width: 50%;
  text-align: center;
  border: none;
  background-color: rgb(106, 109, 109);
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
