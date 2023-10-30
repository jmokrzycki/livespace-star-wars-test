import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import { TextInfo, ArrayInfo } from "../components/EntityInfo";

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
        {vehicle.name && (
          <>
            <img
              className="card__image"
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt=""
            />
            <TextInfo caption="Name:" text={vehicle.name} />
            <TextInfo caption="Type:" text={vehicle.type} />
            <ArrayInfo caption="Pilots:" data={pilots} />
          </>
        )}
        {!vehicle.name && "Not found"}
      </div>
    </div>
  );
}

export default Vehicles;
