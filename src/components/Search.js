import React,{useEffect,useState} from 'react'
import './Search.scss'

function Search({pokemon,setPokemon,pokeData,setPokeData}) {

    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    const fetchPokeData = async() => {
       const result = await fetch(URL)
       const data = await result.json()
       setPokeData(data)
    }
    const onChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    }
    const onSearch = () => {
        if(pokemon === ''){
            setPokemon('p');
        }else{
            fetchPokeData()
        }
    }
    return (
        <div className="search">
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input onChange={onChange} type="text" placeholder="search pokemon..." />
                <button onClick={()=>{onSearch()}} type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
    )
}

export default Search
