import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import People from "./People/People";
import Planets from "./Planets/Planets";
import Vehicles from "./Vehicles/Vehicles";
import List from "./List/List";
import Wrapper from "./components/Wrapper/Wrapper";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/people" replace={true} />,
    },
    {
      path: "/:type",
      element: (
        <Wrapper>
          <List />
        </Wrapper>
      ),
    },
    {
      path: "/people/:id",
      element: (
        <Wrapper>
          <People />
        </Wrapper>
      ),
    },
    {
      path: "/planets/:id",
      element: (
        <Wrapper>
          <Planets />
        </Wrapper>
      ),
    },
    {
      path: "/vehicles/:id",
      element: (
        <Wrapper>
          <Vehicles />
        </Wrapper>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
