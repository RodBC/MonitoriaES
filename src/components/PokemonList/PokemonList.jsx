import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { PokemonMinCard } from './PokemonMinCard/PokemonMinCard'

export const PokemonList = () => {

  const [pokemonListNumber, setPokemonListNumber] = useState(20)
  const [pokemonList, setPokemonList] = useState([])
  

    const fetchPokemonList = async () => {
      let pokemonTempList = []
      try {
          const receiveList =  await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${pokemonListNumber}`)
          receiveList.data.results.map((e =>{
            pokemonTempList.push(e.name)
          }))
          
          setPokemonList(pokemonTempList)
          console.log(pokemonTempList)
        } catch (error) {
          alert(error)
          throw error;
        }
      }
      
      useEffect(() => {
        fetchPokemonList()
      }, [pokemonListNumber])
    

    return(
        <div className="rightSideScreen">
          <button onClick={() => setPokemonListNumber(pokemonListNumber+20)}>mais 20</button>
          {pokemonList.map((e) => {
            return(
            <PokemonMinCard pokemonName={e}/>)
          })}
        </div>

    )
}