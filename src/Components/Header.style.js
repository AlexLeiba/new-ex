import styled from "styled-components";

export const Logo = styled.img`
  width: 50px;
  height: auto;

  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;
