import React from "react"
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import AnimalsContainer from "./docs/day04/context/expert/AnimalsContainer";
// import ParentContainer from "./docs/day04/context/normal/ParentContainer";
// import ParentContainer from "./docs/day04/context/basic/ParentContainer";
// import CharContainer from "./docs/day04/context/basic/CharContainer";
// import PowButton from "./pages/home/PowButton";


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <PowButton /> */}
      {/* <CharContainer /> */}
      {/* <ParentContainer /> */}
      {/* <ParentContainer /> */}
      <AnimalsContainer />
    </ThemeProvider>
    </>
  );
}

export default App;
