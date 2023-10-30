import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import "./styles.scss";

function Vehicles() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({});
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/vehicles/${id}`).then((vehicle) => {
      if (vehicle !== null) {
        setVehicle(vehicle);

        fetchArrayData(vehicle.pilots).then((pilots) => {
          console.log("pilots", pilots);
          setPilots(pilots);
        });
      } else {
        setVehicle(false);
      }
    });
  }, [id]);

  return (
    <div className="container">
      <div className="vehicle">
        {vehicle && (
          <>
            <img
              className="card__image"
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt=""
            />
            <div>{vehicle.name}</div>
            <div>{vehicle.vehicle_class}</div>
            {pilots &&
              pilots.map((pilot) => (
                <Link
                  to={pilot.url && pilot.url.replaceAll(swapiBaseUrl, "")}
                  className="link"
                  key={pilot.url}
                >
                  {pilot.name}
                </Link>
              ))}
          </>
        )}
        {!vehicle && "Not found"}
      </div>
    </div>
  );
}

export default Vehicles;
