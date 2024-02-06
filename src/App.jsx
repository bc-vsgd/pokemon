// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Style
import "./App.css";
// Pages
import Home from "./assets/pages/Home/Home";
import Pokemons from "./assets/pages/Pokemons/Pokemons";
import Pokemon from "./assets/pages/Pokemon/Pokemon";
import Types from "./assets/pages/Types/Types";
import Type from "./assets/pages/Type/Type";
// Components
import Header from "./assets/components/Header/Header";

const url = "https://pokeapi.co/api/v2";
const picsUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pokemon"
          element={<Pokemons url={url} picsUrl={picsUrl} />}
        />
        <Route
          path="/pokemon/:id"
          element={<Pokemon url={url} picsUrl={picsUrl} />}
        />
        <Route path="/type" element={<Types url={url} />} />
        <Route
          path="/type/:type"
          element={<Type url={url} picsUrl={picsUrl} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
