import Header from "./components/Pages/Header";
import Main from "./components/Pages/Main";
import Perfil from "./components/Pages/Perfil";
import GlobalStyles from "./styles/GlobalStyles";
import {ThemeProvider} from 'styled-components'
import dark from "./themes/dark";
import { useState } from "react";
import light from "./themes/light";
import usePersistedState from "./utils/usePersistedState";



function App() {

  const [theme,setTheme] = usePersistedState('theme',dark);

  const toggleTheme =() => {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
  
     <ThemeProvider theme={theme}>
   <div className="App">
      <Header toggleTheme={toggleTheme}/>
      <Perfil/>
      <Main/>
     <GlobalStyles/>
    </div>
     </ThemeProvider>
    
  );
}

export default App;
