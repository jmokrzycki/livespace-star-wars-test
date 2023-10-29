import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import People from "./People/People";
import List from "./List/List";

function App() {
  const router = createBrowserRouter([
    {
      path: "/:type",
      exact: true,
      element: <List />,
    },
    {
      path: "/people/:id",
      element: <People />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
