import React from 'react';
import axios from "axios";
import './App.css';

function App() {

    async function fetchData() {
        try {
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto', {
                    'Accept': 'application/json',
                });
            console.log(result)
        } catch (e) {
        console.error(e);
        }
    }


  return (
    <div>
        <img src="" alt="logo"/>
        <div className="buttons">
            <button
            type="button"
            onClick={fetchData}
            >
                Vorige
            </button>
            <button
                type="button"
            >
                Volgende
            </button>
        </div>
        <div className="pokemons">
        <div className="pokemon">
            <h3>name</h3>
            <img src="" alt="pokemon"/>
            <h4>Moves: </h4>
            <h4>Weight: </h4>
            <h4>Abilities:</h4>
            <div className="abilities">
            </div>
        </div>
        </div>


    </div>
  );
}

export default App;
