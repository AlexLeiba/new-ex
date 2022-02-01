import styled, { css } from "styled-components";

// Containerul
export const InputContainer = styled.div`
  width: 300px;
  position: relative;
`;

// Inputul
export const InputElement = styled.input`
  transition: all 0.5s;
  width: 100%;
  border-radius: 8px;
  padding: 10px;

  &:hover {
    box-shadow: 2px 2px 2px 0px gray;
  }

  &:focus {
    background-color: wheat;
    color: black;
  }

  ${({ type }) => {
    switch (type) {
      case "text":
        return css`
          background-color: yellow;
        `;
      case "number":
        return css`
          background-color: black;
        `;
      default:
        return type;
    }
  }}

  ${({ error }) =>
    error === true &&
    css`
      border: 2px solid red;
    `}
`;

// Label

export const Label = styled.label`
width: 100%;
font-size: 12px;
color: black;
padding: 2px
display: block;

${({ error }) =>
  error === true &&
  css`
    color: red;
  `}

`;

export const Error = styled.span`
  width: 100%;
  font-size: 10px;
  color: red;
  padding: 2px;
  display: block;
`;
