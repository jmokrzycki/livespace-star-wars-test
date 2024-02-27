import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { swapiBaseUrl } from "../common/baseUrls";
import { fetchData } from "../common/functions";
import { CharactersState } from "./types";
import "./styles.scss";

const List: React.FC = () => {
  const { type } = useParams();

  const [characters, setCharacters] = useState<CharactersState>({
    results: [],
    previous: null,
    next: null,
  });

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/${type}/`).then((characters) => setCharacters(characters));
  }, [type]);

  const handleNavigation = (address: string | null) => {
    fetchData(address).then((characters) => setCharacters(characters));
  };

  return (
    <div className="container">
      <h1 className="title">{type}</h1>
      <div className="navigation">
        <button
          className="navigation__button"
          onClick={() => handleNavigation(characters.previous)}
          disabled={!characters.previous}
          aria-label="Previous Page"
        >
          <span aria-hidden="true">{"<"}</span>
        </button>
        <button
          className="navigation__button"
          onClick={() => handleNavigation(characters.next)}
          disabled={!characters.next}
          aria-label="Next Page"
        >
          <span aria-hidden="true">{">"}</span>
        </button>
      </div>

      <div className="list">
        {characters.results.map((character) => (
          <div className="card" key={character.url}>
            <Link to={character.url.replaceAll(swapiBaseUrl, "")} className="list__link">
              <img className="card__image" src={"./no-image.jpg"} alt={character.name} />
              <div className="card__caption">{character.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
