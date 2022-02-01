import React from "react";
import { InputContainer, InputElement,Label, Error } from "./Input.style";

export function Input({ placeholder, value, type, onchange, error }) {
  return (
    <InputContainer>

  <Label error={error}>Label</Label>

      <InputElement
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => onchange(e.target.value)}
        error={error}
      />

  {error && <Error>Error</Error>}

    </InputContainer>
  );
}
