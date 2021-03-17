import React from 'react'
import './Header.scss'

import pokeballImage from '../images/pokeball-pokemon-svgrepo-com.svg'
import pokemonLogoImage from '../images/pokemon-logo.svg'

function Header() {
    return (
        <div className="header">
            <img className='pokeball' src={pokeballImage} alt='pokeball' />
            <img className='pokemon-logo' src={pokemonLogoImage} alt='pokemon-logo' />
        </div>
    )
}

export default Header
