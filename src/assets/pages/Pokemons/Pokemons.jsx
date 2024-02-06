// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemons = ({ url, picsUrl }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/pokemon`);
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
      {data.results.map((result, index) => {
        return (
          <Link to={`/pokemon/${result.name}`} key={index}>
            <div>
              <span>{result.name}</span>
              <img src={`${picsUrl}/${index + 1}.png`} alt="Pokemon" />
            </div>
          </Link>
        );
      })}
    </div>
  ) : (
    <div>Chargement en cours</div>
  );
};

export default Pokemons;
