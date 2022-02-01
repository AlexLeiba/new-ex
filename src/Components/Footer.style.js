import styled from "styled-components";

export const FooterStyled = styled.div`
  background-color: ${({ newColor }) => newColor};
  width: 100%;
  min-height: 10vh;

  p {
    font-size: ${({ newSize }) => newSize};
    color: white;
  }

  h1 {
    color: pink;
  }
`;
