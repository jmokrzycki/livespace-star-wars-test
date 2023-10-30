import CategoriesList from "./CategoriesList";

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <CategoriesList />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Wrapper;
