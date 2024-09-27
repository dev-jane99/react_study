import React from "react"
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/global";
import theme from "./global/theme";
import FormLoginCode from "./docs/day05/formLoginCode/Form";
// import AnimalsContainer from "./docs/day04/context/expert/AnimalsContainer";
// import CountContainer from "./docs/day05/redux/count/CountContainer";
// import FontContainer from "./docs/day05/redux/font/FontContainer";
// import Counter from "./docs/day05/zustand/Counter";
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
      {/* <AnimalsContainer /> */}
      {/* <CountContainer /> */}
      {/* <FontContainer /> */}
      {/* <Counter /> */}
      <FormLoginCode />
    </ThemeProvider>
    </>
  );
}

export default App;
