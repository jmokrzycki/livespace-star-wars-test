import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { swapiBaseUrl } from "../common/baseUrls";
import { fetchData } from "../common/functions";
import CategotiesList from "./CategoriesList";

function List() {
  const { type } = useParams();

  const [characters, setCharacters] = useState({
    results: [],
  });

  useEffect(() => {
    console.log(type);
    fetchData(`${swapiBaseUrl}/${type}/`).then((characters) =>
      setCharacters(characters)
    );
  }, [type]);

  const hadleClick = (address) => {
    fetchData(address).then((characters) => setCharacters(characters));
  };

  return (
    <div className="list">
      <CategotiesList />
      {characters.results.map((character) => (
        <div key={character.url}>
          <Link to={character.url.replaceAll(swapiBaseUrl, "")}>
            {/* <img className="" src={{}} alt="" /> */}
            <p>{character.name}</p>
          </Link>
        </div>
      ))}
      {characters.previous && (
        <button onClick={() => hadleClick(characters.previous)}>
          Previous
        </button>
      )}
      {characters.next && (
        <button onClick={() => hadleClick(characters.next)}>Next</button>
      )}
    </div>
  );
}

export default List;
