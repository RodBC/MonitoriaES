import { ChangeEvent, useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
export const PokemonDetails = () => {


  const [inputPokeNumber, setinputPokeNumber] = useState(25);
  const [Pokename, setPokename] = useState("");
  const [PokeType, setPokeType] = useState([]);
  const [PokeImage, setPokeImage] = useState("")
  const [isloading, setIsLoading] = useState(false)
  const typesArray: any = []

  function atualizaInfo(){
    let entrada = parseInt((document.getElementById("Input") as HTMLInputElement).value)
    const mensagem = `
    Insira um valor válido!

    --> [ Os Pokemons vão de 1 até 1010 ]
    `
    entrada ? (entrada > 0 && entrada < 1010 ? setinputPokeNumber(entrada):(setTimeout(()=>{alert(mensagem)},500)) ) : setinputPokeNumber(25)
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
      setTimeout(() => {
        setIsLoading(false)           
      }, 1000);

    } catch (error) {
      // alert(error);
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
            <div className="name style_fields">
                {isloading ? <p>Loading...</p> : <p>{Pokename}</p>}
            </div>
            <div>
                {isloading ? <p className="pokedexCardImage style_fields">Loading Image...</p> : <img className="pokedexCardImage style_fields" src={PokeImage}/>}
            </div>
            <div className="info style_fields">
                {isloading ? <p >Loading Types...</p> : <p>{PokeType}</p>}
            </div>
            <input type={"number"} className="input style_fields" id="Input" onChange={atualizaInfo} placeholder="Search by number (1, 1010)"/>
        </div>

        <div className="container_right"></div>
    </div>
    </>
  )
}


