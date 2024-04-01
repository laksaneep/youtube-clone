import { ThemeProvider } from "styled-components";
import { AppContainer, GlobalStyles } from "./App.styles";
import { THEMES } from "./utils/theme";
import { useAppContext } from "./context/App.context";
import Header from "./components/header/Header";
import Tooltips from "./utils/Tooltips";
import Body from "./components/body/Body";

function App() {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <Tooltips />
      <AppContainer>
        <Header />
        <Body />
      </AppContainer>
      ;
    </ThemeProvider>
  );
}

export default App;
