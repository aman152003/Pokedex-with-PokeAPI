import React,{useState} from 'react'
import './App.scss'

import Search from './components/Search'
import Header from './components/Header'
import Card from './components/Card'
import Home from'./components/Home'

import homeImage from './images/ash and grayninja.png'

function App() {
  const [pokemon,setPokemon] = useState('');
  const [pokeData,setPokeData] = useState([]);
  return (
      <div className="app">
        <Header />
        <Search pokemon={pokemon} setPokemon={setPokemon} pokeData={pokeData} setPokeData={setPokeData} />
        {pokeData.length === 0 ? <Home /> : <Card pokemon={pokemon} pokeData={pokeData} />}
      </div>
  )
}

export default App
