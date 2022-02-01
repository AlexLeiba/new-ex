import React from "react";
import { ButtonStyle } from "./Button.style";

export function Button({ value, type, onclick, onclick2 }) {
  return (
    <ButtonStyle
      value={value}
      type={type}
      onClick={() => onclick()}
      onChange={() => onclick2("Ceau")}
    >
      {value}
    </ButtonStyle>
  );
}
