import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import CategotiesList from "../components/CategoriesList";
import "./styles.scss";

function People() {
  const { type, id } = useParams();
  const [entity, setEntity] = useState({});
  const [homeworld, setHomeworld] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [spieces, setSpieces] = useState([]);

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/${type}/${id}`).then((entity) => {
      setEntity(entity);

      fetchData(entity.homeworld).then((homeworld) => setHomeworld(homeworld));
      fetchArrayData(entity.vehicles).then((vehicles) => setVehicles(vehicles));
      fetchArrayData(entity.spieces).then((spieces) => setSpieces(spieces));
    });
  }, [type, id]);

  return (
    <div className="container">
      <CategotiesList />
      <div className="entity">
        <img
          className="card__image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="Entity"
        />
        <div>{entity.name}</div>

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
