import { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

export const PokemonDetails = () => {
  const [isloading, setIsLoading] = useState(false)
  const [inputPokeNumber, setinputPokeNumber] = useState(25);
  const [Pokename, setPokename] = useState("");
  const [PokeType, setPokeType] = useState([]);
  const [PokeImage, setPokeImage] = useState("")
  const typesArray: any = []

  function atualizaInfo(){
    const entrada = parseInt((document.getElementById("Input") as HTMLInputElement).value)
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
  
      types.forEach((e:any) => {
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
    <>
    <div className="container_Card">
        <div className="container_left">
           
            {isloading ?
              <>
              <p className="name style_fields">Loading...</p>
              <p className="pokedexCardImage style_fields">Loading Image...</p>
              <p className="info style_fields">Loading Types...</p>
              </>
              :
              <>
              <p className="name style_fields">{Pokename}</p>
              <img className="pokedexCardImage style_fields" src={PokeImage}/>
              <p className="info style_fields">{PokeType}</p>
              </>
            }
        <input type={"number"} className="input style_fields" id="Input" onChange={atualizaInfo} placeholder="Search by number (1, 1010)"/>
        </div>

        <div className="container_right"></div>
    </div>
    </>
  )
}


