import React from "react";
import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: 100vh;
  width: 25px;

  background-color: aqua;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icons = styled.img`
  width: 40px;
  height: auto;
  margin-bottom: 50px;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid black;
`;

export const Error404 = styled.img`
  background-color: black;
`;
