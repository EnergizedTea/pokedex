import React from 'react'

export const Pokemon = ({pokemon}) => {
  return (
    <div>
        <img src={pokemon.image}/>
        <h3>{pokemon.name}</h3>
    </div>
  )
}
