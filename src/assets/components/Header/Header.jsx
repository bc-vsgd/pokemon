// Packages
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/pokemon">Pokemons</Link>
            </li>
            <li>
              <Link to="/type">Types</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
