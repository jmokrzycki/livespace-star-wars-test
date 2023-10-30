import { Link } from "react-router-dom";
import "./style.scss";

function CategoriesList() {
  return (
    <div className="categoriesSidebar">
      <img src="/logo.svg" alt="" />
      <Link to={"/people"} className="categoriesSidebar__link">
        People
      </Link>
      <Link to={"/vehicles"} className="categoriesSidebar__link">
        Vehicles
      </Link>
      <Link to={"/planets"} className="categoriesSidebar__link">
        Planets
      </Link>
    </div>
  );
}

export default CategoriesList;
