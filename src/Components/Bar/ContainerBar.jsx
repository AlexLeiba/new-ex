import React from "react";
import { Link } from "react-router-dom";
import { ContainerStyled } from "./ContainerBar.style";
import { useState } from "react";

import { Icons, Error404 } from "./ContainerBar.style";

export function ContainerBar() {
  const [state, setState] = useState(false);
  function handleClick() {
    let result = state;
    setState(!state);
    console.log(result);
  }
  return (
    <ContainerStyled width={state}>
      <Link to="/about">
        <Icons
          onClick={handleClick}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPPZtENlBAgXm5Tq2BkVoaGhCpg4pJLbpQA&usqp=CAU"
          alt="sa"
        />
      </Link>

      <Link to="home">
        <Icons
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPPZtENlBAgXm5Tq2BkVoaGhCpg4pJLbpQA&usqp=CAU"
          alt="sa"
        />
      </Link>

      <Link to="asas">
        <Icons
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPPZtENlBAgXm5Tq2BkVoaGhCpg4pJLbpQA&usqp=CAU"
          alt="sa"
        />
      </Link>

      <Icons
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPPZtENlBAgXm5Tq2BkVoaGhCpg4pJLbpQA&usqp=CAU"
        alt="sa"
      />

      <Icons
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPPZtENlBAgXm5Tq2BkVoaGhCpg4pJLbpQA&usqp=CAU"
        alt="sa"
      />

      <Icons
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPPZtENlBAgXm5Tq2BkVoaGhCpg4pJLbpQA&usqp=CAU"
        alt="sa"
      />

      <Error404 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPPZtENlBAgXm5Tq2BkVoaGhCpg4pJLbpQA&usqp=CAU" />
    </ContainerStyled>
  );
}
