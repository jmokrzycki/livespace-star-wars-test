import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import { TextInfo, LinkInfo, ArrayInfo } from "../components/EntityInfo";

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
        {character.name && (
          <>
            <img
              className="card__image"
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt=""
            />
            <TextInfo caption="Name:" data={character} />
            <LinkInfo caption="Homeworld:" data={homeworld} />
            <ArrayInfo caption="Vehicles:" data={vehicles} />
            <ArrayInfo caption="Spieces:" data={spieces} />
          </>
        )}
        {!character.name && "Not found"}
      </div>
    </div>
  );
}

export default People;
