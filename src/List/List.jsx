import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { swapiBaseUrl } from "../common/baseUrls";
import { fetchData } from "../common/functions";
import "./styles.scss";

function List() {
  const { type } = useParams();

  const [characters, setCharacters] = useState({
    results: [],
  });

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/${type}/`).then((characters) =>
      setCharacters(characters)
    );
  }, [type]);

  const hadleClick = (address) => {
    fetchData(address).then((characters) => setCharacters(characters));
  };

  return (
    <div className="container">
      <div className="list">
        {characters.results.map((character) => (
          <div className="card" key={character.url}>
            <Link
              to={character.url.replaceAll(swapiBaseUrl, "")}
              className="link"
            >
              <img
                className="card__image"
                src={
                  "https://starwars-visualguide.com/assets/img/characters/1.jpg"
                }
                alt="Entity"
              />
              <div>{character.name}</div>
            </Link>
          </div>
        ))}
      </div>
      <div className="navigation">
        {characters.previous && (
          <button onClick={() => hadleClick(characters.previous)}>
            Previous
          </button>
        )}
        {characters.next && (
          <button onClick={() => hadleClick(characters.next)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default List;
