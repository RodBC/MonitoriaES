import { ChangeEvent, useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
export const PokemonDetails = () => {


  const [inputPokeNumber, setinputPokeNumber] = useState("");
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setinputPokeNumber(e.target.value);
  };

  const [Pokename, setPokename] = useState("");
  const [PokeType, setPokeType] = useState([]);

  const fetchPokemon = async (numero: string) => {
    try {
      if (inputPokeNumber <= "1010"){

        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`)
        if (inputPokeNumber){
          
          const {name, types} = data
          let typesArray: any = []
          types.map((e: any) => {
            typesArray.push(e.type.name);
          })
          setPokeType(typesArray)
          setPokename(name)
          return name;
        }
      }
    } catch (error) {
      throw error
    }
  }
  
  useEffect(() => {
    fetchPokemon(inputPokeNumber)
    
  }, [inputPokeNumber])


  return (
    <>
        <p>input a pokemon number less or equal to 1010</p>
        <input type="text" onChange={handleChange} value={inputPokeNumber} />
        {/* <button onClick={() => fetchPokemon(inputPokeNumber)} >procurar pelo pokemon de codigo {inputPokeNumber}</button> */}
        <p>{`Pokemon Name:  ${Pokename}`}</p>
        <p>{`Pokemon Types:  ${PokeType}`}</p>
        
    </>
  )
}


