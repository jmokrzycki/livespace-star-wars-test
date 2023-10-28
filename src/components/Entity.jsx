import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../common/functions";
import { swapiBaseUrl } from "../common/baseUrls";
import CategotiesList from "./CategoriesList";

function Entity() {
  const { type, id } = useParams();

  const [entity, setEntity] = useState({});

  useEffect(() => {
    fetchData(`${swapiBaseUrl}/${type}/${id}`).then((entity) =>
      setEntity(entity)
    );
  }, []);

  return (
    <div className="entity">
      <CategotiesList />
      {entity.name}
    </div>
  );
}

export default Entity;
