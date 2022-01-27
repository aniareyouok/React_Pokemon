import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';

function App() {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [moves, setMoves] = useState('');
    const [weight, setWeight] = useState('');
    const [abilities, setAbilities] = useState('');

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto', {
                    'Accept': 'application/json',
                });
                setImage(result.data.sprites.front_default);
                setName(result.data.name)
                setWeight(result.data.weight)
                setMoves(result.data.moves.length)
                setAbilities(result.data.abilities.map())

                console.log(result.data)
            } catch (e) {
                console.error(e);

            }
        }

        fetchData();

    } , []);


  return (
    <div>
        <img src="" alt="logo"/>
        <div className="buttons">
            <button
            type="button"
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
            <h3>{name}</h3>
            <img src={image} alt='pokemon'/>
            <h4>Moves: {moves} </h4>
            <h4>Weight: {weight} </h4>
            <h4>Abilities:</h4>
            <div className="abilities">
                {abilities}
            </div>
        </div>
        </div>


    </div>
  );
}

export default App;
