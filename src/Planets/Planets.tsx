import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import { TextInfo, ArrayInfo } from "../components/EntityInfo";
import { EntitySimpleData } from "../common/types.ts";
import { Planet } from "./types";

function Planets() {
  const { id } = useParams();
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [residents, setResidents] = useState<EntitySimpleData[]>([]);

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/planets/${id}`).then((planet) => {
      if (planet !== null) {
        setPlanet(planet);
        fetchArrayData(planet.residents).then((residents) =>
          setResidents(residents)
        );
      } else {
        setPlanet(null);
      }
    });
  }, [id]);

  return (
    <div className="container">
      <div className="planet">
        {planet && (
          <>
            <img
              className="card__image"
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt=""
            />
            <TextInfo caption="Name:" text={planet.name} />
            <TextInfo caption="Type:" text={planet.terrain} />
            <ArrayInfo caption="Residents:" data={residents} />
          </>
        )}
        {!planet && "Not found"}
      </div>
    </div>
  );
}

export default Planets;
