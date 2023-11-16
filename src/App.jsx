import { useState } from 'react'
import pokeLogo from './assets/pokebola.png'
import { Pokedex } from './components/Pokedex'
import './App.css'


function App() {

  return (
    <>
      <div>
        <a href="https://pokeapi.co" target="_blank">
          <img src={pokeLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Pokédex</h1>
      <div className='card'>
        <Pokedex/>
      </div>
    </>
  )
}

export default App
