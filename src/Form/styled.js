import styled from "styled-components";

export const Field = styled.fieldset`
  border: 1px solid #ccc;
  padding: 20px 0;
  border-radius: 5px;
  margin: 20px 0;
`;

export const Title = styled.legend`
  background-color: hsl(209, 67%, 27%);
  color: white;
  border-radius: 5px;
  padding: 10px;
`;

export const LabelForm = styled.span`
  width: 100%;
  max-width: 150px;
  display: inline-block;
  margin-right: 5px;
  font-size: large;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
`;

export const LabelSelect = styled.span`
  width: 100%;
  max-width: 150px;
  display: inline-block;
  margin-right: 5px;
  font-size: large;
`;

export const InputSelect = styled.select`
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
`;

export const Loding = styled.p`
color: darkblue;
font-size: large;
`;

export const Failing = styled.p`
color: darkred;
font-size: large;
`;