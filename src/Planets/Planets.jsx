import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import { TextInfo, ArrayInfo } from "../components/EntityInfo";

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
        {!planet.name && "Not found"}
      </div>
    </div>
  );
}

export default Planets;
