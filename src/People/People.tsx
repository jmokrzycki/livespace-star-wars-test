import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, fetchArrayData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import { TextInfo, LinkInfo, ArrayInfo } from "../components/EntityInfo";
import { EntitySimpleData } from "../common/types";
import { Character } from "./types";

const People: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>({});
  const [homeworld, setHomeworld] = useState<EntitySimpleData>({
    name: "n/a",
    url: "",
  });
  const [vehicles, setVehicles] = useState<EntitySimpleData[]>([]);
  const [species, setSpecies] = useState<EntitySimpleData[]>([]);

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/people/${id}`).then((character) => {
      if (character !== null) {
        setCharacter(character);

        fetchData(character.homeworld).then((homeworld) => setHomeworld(homeworld));
        fetchArrayData(character.vehicles).then((vehicles) => setVehicles(vehicles));
        fetchArrayData(character.spieces).then((spieces) => setSpecies(spieces));
      } else {
        setCharacter(null);
      }
    });
  }, [id]);

  return (
    <div className="container">
      <div className="character">
        {character && (
          <>
            <img className="card__image" src="/no-image.jpg" alt={`Image of ${character.name}`} />
            <TextInfo caption="Name:" text={character.name} />
            <LinkInfo caption="Homeworld:" data={homeworld} />
            <ArrayInfo caption="Vehicles:" data={vehicles} />
            <ArrayInfo caption="Spieces:" data={species} />
          </>
        )}
        {!character && <span>Not found</span>}
      </div>
    </div>
  );
};

export default People;
