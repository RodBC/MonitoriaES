import { useState, useEffect } from 'react'
import axios from 'axios'
import {PokemonCard} from './pokemonCard/pokemonCard'

export const PokemonDetails = () => {
  const [isloading, setIsLoading] = useState(false)
  const [inputPokeNumber, setinputPokeNumber] = useState(25);
  const [Pokename, setPokename] = useState("");
  const [PokeType, setPokeType] = useState([]);
  const [PokeImage, setPokeImage] = useState("")
  const typesArray = []

  function atualizaInfo(){
    const entrada = parseInt(document.getElementById("Input").value)
    const errorMessage = `
    Insira um valor válido!

    --> [ Os Pokemons vão de 1 até 1010 ]
    `
    if (entrada){
      (entrada > 0 && entrada < 1010)?
      setinputPokeNumber(entrada)
      :
      setTimeout(() => alert(errorMessage),500)
    } else {
      setinputPokeNumber(25)
    }
  } 

  const fetchPokemon = async () => {
    setIsLoading(true)
    try {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputPokeNumber}`)
      const {name, types, sprites} = data;

      setPokename(`${name} - ${inputPokeNumber}`)
      setPokeImage(sprites.other.dream_world.front_default)
      types.forEach((e) => {
        typesArray.push(e.type.name + ', ')
      });
      setPokeType(typesArray)
      setIsLoading(false)           
    } catch (error) {
      setIsLoading(false)
      throw error;
    }
  }
  
  useEffect(() => {
    fetchPokemon()
  }, [inputPokeNumber])

  return (
    <PokemonCard Pokename={Pokename} PokeImage={PokeImage} PokeType={PokeType} atualizaInfo={atualizaInfo} isloading={isloading}/>
  )
}


