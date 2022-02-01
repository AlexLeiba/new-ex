import { Container } from "./Components/Container.style";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Input } from "./Components/Input/Input";
import { useState, useEffect } from "react";
import { Button } from "./Components/Button/Button";
import { ThemeProvider } from "styled-components";
import { Body } from "./Components/Body/Body";
import { ArrayObject } from "./Components/Array";
import { Card } from "./Components/Card/Card";
// import { GlobalStyles } from "./Components/Global/Global.style";

import { ContainerBar } from "./Components/Bar/ContainerBar";

const theme = {
  colors: {
    header: "white",
    body: "black",
    button: "aqua",
    sizeSmall: "100px",
    sizeLarge: "200px",
  },
};

function App() {
  const [inputState, setInput] = useState("");
  const [button, setButton] = useState(0);

  useEffect(() => {
    console.log("sa declansat inputul");
  }, [inputState]);

  function handleChange(param) {
    setInput(param);

    console.log(param);
  }

  function handleClick() {
    let previusState = button;
    let newState = previusState + 1;
    setButton(newState);
    console.log(newState);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header colors="yellow" />
        <Container>
          <Input
            placeholder="Input"
            type="text"
            value={inputState}
            onchange={handleChange}
            error={false}
          />
          <h1>Ceau</h1>
        </Container>

        <Body />

        {/* Va lua valoarea la tot array-ul */}
        {ArrayObject.map((element, index) => (
          <div>
            <Card key={index} items={element} />
          </div>
        ))}

        <Button type="delete" value={button} onclick={handleClick} />

<ContainerBar/>


        <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;
