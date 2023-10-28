import { Link } from "react-router-dom";

function CategoriesList() {
  return (
    <div className="categoriesList">
      <Link to={"/people"}>People</Link>
      <Link to={"/vehicles"}>Vehicles</Link>
      <Link to={"/planets"}>Planets</Link>
    </div>
  );
}

export default CategoriesList;
