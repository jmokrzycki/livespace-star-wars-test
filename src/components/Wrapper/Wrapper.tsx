import CategoriesList from "../CategoriesSidebar";
import { WrapperProps } from "./types";
import "./style.scss";

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <CategoriesList />
      <div className="content">{children}</div>
    </div>
  );
};

export default Wrapper;
