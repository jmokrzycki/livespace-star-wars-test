import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { swapiBaseUrl } from "../common/baseUrls";
import { fetchData } from "../common/functions";
import { CharactersState } from "./types";
import "./styles.scss";

function List() {
  const { type } = useParams();

  const [characters, setCharacters] = useState<CharactersState>({
    results: [],
    previous: null,
    next: null,
  });

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/${type}/`).then((characters) =>
      setCharacters(characters)
    );
  }, [type]);

  const hadleClick = (address: string | null) => {
    fetchData(address).then((characters) => setCharacters(characters));
  };

  return (
    <div className="container">
      <h1 className="title">{type}</h1>
      <div className="navigation">
        <button
          className="navigation__button"
          onClick={() => hadleClick(characters.previous)}
          disabled={characters.previous === null}
        >
          {"<"}
        </button>
        <button
          className="navigation__button"
          onClick={() => hadleClick(characters.next)}
          disabled={characters.next === null}
        >
          {">"}
        </button>
      </div>

      <div className="list">
        {characters.results.map((character) => (
          <div className="card" key={character.url}>
            <Link
              to={character.url.replaceAll(swapiBaseUrl, "")}
              className="list__link"
            >
              <img
                className="card__image"
                src={"./no-image.jpg"}
                alt="Entity"
              />
              <div className="card__caption">{character.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
