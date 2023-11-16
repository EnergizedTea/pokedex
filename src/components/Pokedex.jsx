import React, {useState, useEffect} from 'react'
import { Pokemon } from './Pokemon'
import axios from 'axios'
import db from '../firebase/firebaseConfig'
import { collection, doc, addDoc, onSnapshot } from 'firebase/firestore'


export const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [team, setTeam] = useState([])
    const [page, setPage] = useState(1)

    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
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
    }, [setPokemons, page])


    useEffect(() => {
        const unsub = onSnapshot(doc(db, "teams", "principal"), (snapshot) => {
            const data = snapshot.data();

            Object.keys(data).forEach((key) => {
                console.log(`$`)
            })
            console.log(snapshot.data())
            snapshot.map((doc) => {
                console.log(doc)
            })

            console.log(snapshot.data(snapshot.map()))
        })
    }, [])//la lista vacia causa que esto solo suceda una vez

  return (
    <div>
        <div>
                {
                    page != 1 && <button onClick={() => setPage(page - 1)}>Anterior</button>
                }
                <button onClick={() => setPage(page + 1)}>Siguiente</button>
        </div>
                <br></br>
        <div className = 'guarderia'>   
            {pokemons.map((pokemon) => {
                return <Pokemon key={pokemon.id} pokemon={pokemon}/>
            })}
        </div>
    </div>
  )
}

//el atajo de snippet es rafc