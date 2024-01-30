import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import imgRickMorty from "./img/rick-morty.png"
import Characters from "./components/Characters.jsx"

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    //console.log("before");
    //await (setTimeout(()=>{console.log("waiting");}),1500);
    //console.log("after");

    setCharacters(characterApi.results);
    console.log("api ",api);
    console.log("res ",characterApi.results);
    console.log("array ",characters);
  };

  console.log("char ",characters);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="title">Rick & Morty</h1>
          {characters? (
            <Characters characters={characters} setCharacters={setCharacters}></Characters>
          ):
          (
            <>
              <img src={imgRickMorty} alt="Rick and morty" className="img-home"/>
              <button onClick={reqApi} className="btn-search">
                Buscar Persoanjes
              </button>
            </>
          )}
        </header>
      </div>
    </>
  )
}

export default App
