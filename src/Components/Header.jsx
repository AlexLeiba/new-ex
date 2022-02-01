import React from "react";
import { Logo, Nav } from "./Header.style";
import { Button } from "./Button/Button";


export function Header({ colors, value }) {
  function handleClick(value){
console.log(value)


  }
  return (
    <Nav>
      <Logo src="../images/bitzu.jpg" alt="logo" />
      <Button value="Click me" onclick2={handleClick}></Button>
    </Nav>
  );
}
