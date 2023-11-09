import React, {useState, useEffect} from 'react'
import { Pokemon } from './Pokemon'
import axios from 'axios'

export const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon"
    useEffect(() => {
        axios.get(url).then((response) =>{
           // setPokemons(response.data.results)
           const pokemonList = response.data.results
           const pokemonPromises = pokemonList.map(pokemon => {
            return axios.get(pokemon.url)
           })
           Promise.all(pokemonPromises).then(pokemonResponses => {
            const pokemonData = pokemonResponses.map(res => {
                const pokemon = res.data
                return {
                    ...pokemon,
                    image: pokemon.sprites.front_default,
                    sprites: pokemon.spritress
                }
            })
            setPokemons(pokemonData)
           })
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