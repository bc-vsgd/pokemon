// Packages
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Type = ({ url, picsUrl }) => {
  const { type } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/type/${type}`);
        setData(data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return !isLoading ? (
    <div>
      <h1>Type: {type}</h1>
      {data.pokemon.map((elt, index) => {
        // Pokemon id search
        const pokemonUrl = elt.pokemon.url;
        const subStr = pokemonUrl.slice(0, pokemonUrl.length - 1);
        const foundIndex = subStr.lastIndexOf("/");
        const pokId = subStr.slice(foundIndex + 1);
        return (
          <Link to={`/pokemon/${elt.pokemon.name}`} key={index}>
            <div>
              <p>{elt.pokemon.name}</p>
              <img src={`${picsUrl}/${pokId}.png`} alt="Pokemon" />
            </div>
          </Link>
        );
      })}
    </div>
  ) : (
    <div>Chargement en cours</div>
  );
};

export default Type;
