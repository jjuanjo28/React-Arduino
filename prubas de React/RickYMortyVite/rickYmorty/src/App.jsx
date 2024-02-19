
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/404/PageNotFound";
import NavBar from "./components/navBar";
import TodosLosPersonajes from "./components/todosLosPersonajes";
import Characters from "./pages/characters/characters";
import PersonajesVivos from "./components/personajesVivos";
import PersonajesMuertos from "./components/PersonajesMuertos";
import PersonajesDesconocidos from "./components/PersonajesDesconocido";
import PersonajesMujeres from "./components/PersonajesMujeres";
import PersonajesHombres from "./components/PersonajesHombres";
import PersonajesSinGenero from "./components/PersonajesSinGenero";
import PersonajesDesconocidosDos from "./components/PersonajeDesconocidoDos"
import Ubications from "./pages/ubications/ubications";
import AllUbications from "./components/AllUbications";

function App() {
  
  return (
    
    <Router>
    
     <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        
        <Route path="/rickAndMorty/characters" element={<Characters/>}/>
        
        <Route path="/rickAndMorty/characters/allCharacters" element={<TodosLosPersonajes/>}/>
        
        <Route path="/rickAndMorty/characters/status/aliveCharacters" element={<PersonajesVivos />}/>
        <Route path="/rickAndMorty/characters/status/deadCharacters" element={<PersonajesMuertos/>}/>
        <Route path="/rickAndMorty/characters/status/unknownCharacters" element={<PersonajesDesconocidos/>}/>
        
        <Route path="/rickAndMorty/characters/gender/femaleCharacters" element={<PersonajesMujeres/>}/>
        <Route path="/rickAndMorty/characters/gender/maleCharacters" element={<PersonajesHombres/>}/>
        <Route path="/rickAndMorty/characters/gender/genderlessCharacters" element={<PersonajesSinGenero/>}/>
        <Route path="/rickAndMorty/characters/gender/unknownCharacters" element={<PersonajesDesconocidosDos/>}/>

        <Route path="/rickAndMorty/ubications" element={<Ubications/>}/>
        <Route path="/rickAndMorty/ubications/allUbications" element={<AllUbications/>}/>

        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
     </Router>
  );
}

export default App;
