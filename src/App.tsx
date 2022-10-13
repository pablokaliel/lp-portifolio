import Header from "./components/Pages/Header";
import Main from "./components/Pages/Main";
import Perfil from "./components/Pages/Perfil";
import GlobalStyles from "./styles/GlobalStyles";

function App() {

  return (
  
   <div className="App">
      <Header/>
      <Perfil/>
      <Main/>
     <GlobalStyles/>
    </div>
    
  );
}

export default App;
