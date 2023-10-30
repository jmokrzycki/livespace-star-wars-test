import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import { TextInfo, ArrayInfo } from "../components/EntityInfo";
import { EntitySimpleData } from "../common/types";
import { Vehicle } from "./types/types";

const Vehicles: React.FC = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [pilots, setPilots] = useState<EntitySimpleData[]>([]);

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/vehicles/${id}`).then((vehicle) => {
      if (vehicle !== null) {
        setVehicle(vehicle);

        fetchArrayData(vehicle.pilots).then((pilots) => {
          console.log("pilots", pilots);
          setPilots(pilots);
        });
      } else {
        setVehicle(null);
      }
    });
  }, [id]);

  return (
    <div className="container">
      <div className="vehicle">
        {vehicle && (
          <>
            <img className="card__image" src="/no-image.jpg" alt="" />
            <TextInfo caption="Name:" text={vehicle.name} />
            <TextInfo caption="Type:" text={vehicle.type} />
            <ArrayInfo caption="Pilots:" data={pilots} />
          </>
        )}
        {!vehicle && "Not found"}
      </div>
    </div>
  );
};

export default Vehicles;
