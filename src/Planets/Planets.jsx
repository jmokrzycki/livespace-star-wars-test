import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import "./styles.scss";

function Planets() {
  const { id } = useParams();
  const [planet, setPlanet] = useState({});
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/planets/${id}`).then((planet) => {
      if (planet !== null) {
        setPlanet(planet);

        fetchArrayData(planet.residents).then((residents) =>
          setResidents(residents)
        );
      } else {
        setPlanet(false);
      }
    });
  }, [id]);

  return (
    <div className="container">
      <div className="planet">
        <img
          className="card__image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        />
        <div>{planet.name}</div>
        <div>{planet.terrain}</div>

        {residents &&
          residents.map((resident) => (
            <Link
              to={resident.url && resident.url.replaceAll(swapiBaseUrl, "")}
              className="link"
              key={resident.url}
            >
              {resident.name}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Planets;
