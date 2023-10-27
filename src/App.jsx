import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import getAllCharacters from "./common/getAllCharacters";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters().then((characters) => {
      const charactersSortedByName = characters.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      console.log(charactersSortedByName);
      setCharacters(charactersSortedByName);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
