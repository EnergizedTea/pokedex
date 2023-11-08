import React, {useState, useEffect} from 'react'
import { Pokemon } from './Pokemon'
import axios from 'axios'

export const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon"
    useEffect(() => {
        axios.get(url).then((response) =>{
            setPokemons(response.data.results)
        })
    }, [setPokemons])
  return (
    <div>
        {pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon}/>
        })}
    </div>
  )
}

//el atajo de snippet es rafc