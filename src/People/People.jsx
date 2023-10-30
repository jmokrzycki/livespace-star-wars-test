import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import "./styles.scss";

function People() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [homeworld, setHomeworld] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [spieces, setSpieces] = useState([]);

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/people/${id}`).then((character) => {
      if (character !== null) {
        setCharacter(character);

        fetchData(character.homeworld).then((homeworld) =>
          setHomeworld(homeworld)
        );
        fetchArrayData(character.vehicles).then((vehicles) =>
          setVehicles(vehicles)
        );
        fetchArrayData(character.spieces).then((spieces) =>
          setSpieces(spieces)
        );
      } else {
        setCharacter(false);
      }
    });
  }, [id]);

  return (
    <div className="container">
      <div className="character">
        <img
          className="card__image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt=""
        />
        <div>{character.name}</div>

        {homeworld && (
          <Link
            to={homeworld.url && homeworld.url.replaceAll(swapiBaseUrl, "")}
            className="link"
          >
            {homeworld.name}
          </Link>
        )}

        {vehicles &&
          vehicles.map((vehicle) => (
            <Link
              to={vehicle.url && vehicle.url.replaceAll(swapiBaseUrl, "")}
              className="link"
              key={vehicle.url}
            >
              {vehicle.name}
            </Link>
          ))}

        {spieces &&
          spieces.map((spiece) => (
            <Link
              to={spiece.url && spiece.url.replaceAll(swapiBaseUrl, "")}
              className="link"
              key={spiece.url}
            >
              {spiece.name}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default People;
