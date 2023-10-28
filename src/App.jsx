import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Entity from "./components/Entity";
import List from "./components/List";

function App() {
  const router = createBrowserRouter([
    {
      path: "/:type",
      exact: true,
      element: <List />,
    },
    {
      path: "/:type/:id",
      element: <Entity />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
