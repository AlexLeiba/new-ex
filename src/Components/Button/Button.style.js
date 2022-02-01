import styled, { css } from "styled-components";

export const ButtonStyle = styled.button`
  min-width: ${({ theme }) => theme.colors.sizeLarge};
  background-color: aqua;
  padding: 20px;
  border-radius: 8px;
  ${({ type, value }) => {
    switch (type) {
      case "delete":
        return css`
          background-color: red;
        `;
      case "primary":
        return css`
          background-color: blue;
          color: black;
        `;
      case "secondary":
        return css`
          background-color: white;
          color: black;
        `;

      default:
        return css`
          background-color: white;
        `;
    }
  }};
`;
