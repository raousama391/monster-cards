import { useEffect, useState } from "react";
import { CardList } from "./conponents/card-list/card-list";
import { SearchBox } from "./conponents/search-box/search-box.jsx";
import "./App.css";

function App() {
  const [state, setState] = useState({ monsters: [] });
  const [search, setSreach] = useState({ search: "" });
  const filterMonster = state.monsters.filter((monster) =>
    monster.name.toLowerCase().includes(search.search.toLowerCase())
  );

  //  let state = {
  //    monster: [],
  //  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((user) => setState({ monsters: user }));
  }, []);
  return (
    <>
      <div className="App">
        <h1 className="h1"> Monsters Rolodex by raousama391 </h1>
        <SearchBox
          placeholder="Search..."
          onchange={(e) => {
            setSreach({ search: e.target.value });
            console.log(search);
          }}
        />
        <CardList monsters={filterMonster} />
      </div>
    </>
  );
}

export default App;
