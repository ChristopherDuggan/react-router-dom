import { useState } from 'react';

import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  
  const initialState = [
    { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
    { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
    { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
    { _id: 4, name: 'charmander', weight: 85, height: 6 },
    { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
  ]

  const [pokemon, setPokemon] = useState(initialState);

  return (
    <>
      <h1>Pokemon!</h1>
      <PokemonList pokemon={pokemon} />
    </>
  )
}

export default App
