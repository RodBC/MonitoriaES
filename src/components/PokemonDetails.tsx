import { ChangeEvent, useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
export const PokemonDetails = () => {


  const [inputPokeNumber, setinputPokeNumber] = useState("");
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setinputPokeNumber(e.target.value);
  };

  const [Pokename, setPokename] = useState("");
  const fetchPokemon = async (numero: string) => {
    try {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      const {name} = data
      setPokename(name)
      return name;
    } catch (error) {
      throw error
    }
  }
  
  useEffect(() => {
    fetchPokemon(inputPokeNumber)
    
  }, [inputPokeNumber])


  return (
    <>
        <input type="text" onChange={handleChange} value={inputPokeNumber} />
        {/* <button onClick={() => fetchPokemon(inputPokeNumber)} >procurar pelo pokemon de codigo {inputPokeNumber}</button> */}
        <p>{Pokename}</p>
    </>
  )
}


