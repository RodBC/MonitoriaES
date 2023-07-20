import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'

export const PokemonList = () => {

  const [pokemonListNumber, setPokemonListNumber] = useState(20)
  const [pokemonList, setPokemonList] = useState({})
  

    const fetchPokemonList = async () => {
      try {
          const receiveList =  await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${pokemonListNumber}`)
          receiveList.data.results.map((e =>{
            console.log(e.name)
          }))
          console.log('-')
          
          setPokemonList(receiveList)

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
          {pokemonListNumber}
        </div>

    )
}