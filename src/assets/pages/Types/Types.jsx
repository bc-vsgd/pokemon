// Packages
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Types = ({ url }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/type`);
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
          <Link to={`/type/${result.name}`} key={index}>
            <div>{result.name}</div>
          </Link>
        );
      })}
    </div>
  ) : (
    <div>Chargement en cours</div>
  );
};

export default Types;
