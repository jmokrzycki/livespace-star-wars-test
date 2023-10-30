import CategoriesList from "../CategoriesSidebar";
import "./style.scss";

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <CategoriesList />

      <div className="content">{children}</div>
    </div>
  );
}

export default Wrapper;
