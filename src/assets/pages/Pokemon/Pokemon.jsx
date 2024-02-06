// Packages
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = ({ url, picsUrl }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/pokemon/${id}`);
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
      <div>
        <span>{id}</span>
        <img src={`${picsUrl}/${data.id}.png`} alt="Pokemon" />
      </div>
      <div>
        {data.types.map((type, index) => {
          return (
            <Link to={`/type/${type.type.name}`} key={index}>
              <p>{type.type.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <div>Chargement en cours</div>
  );
};

export default Pokemon;
