import React from 'react'
import './Card.scss'

function Card({pokeData}) {
    return (
        <div className="card">
            <img src={pokeData.sprites.front_default} alt='pokemon-avatar' />
            <h1>#{pokeData.id} {pokeData.name}</h1>
            <div className="stats-container">
                <h3>Stats</h3>
                <div className="stats">
                    <div className="stats-left">
                        <p><span className="bold">HP</span>: {pokeData.stats[0].base_stat}</p>
                        <p><span className="bold">Attack</span>: {pokeData.stats[1].base_stat}</p>
                        <p><span className="bold">Defense</span>: {pokeData.stats[2].base_stat}</p>
                        <p><span className="bold">Sp. Attack</span>: {pokeData.stats[3].base_stat}</p>
                        <p><span className="bold">Sp. Defense</span>: {pokeData.stats[4].base_stat}</p>
                        <p><span className="bold">Speed</span>: {pokeData.stats[5].base_stat}</p>
                    </div>
                    <div className="stats-right">
                        <p><span className="bold">Type</span>: {pokeData.types[0].type.name}</p>
                        <p><span className="bold">Weight</span>: {pokeData.weight}lbs</p>
                    </div>
                </div>
            </div>    
        </div>
    )    
    }

export default Card
