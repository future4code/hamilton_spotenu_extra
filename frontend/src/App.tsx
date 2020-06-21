import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { GlobalStyle, theme } from "./style/global";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
