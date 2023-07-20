import "./style.css"

export const PokemonCard = ({Pokename, PokeImage, PokeType, atualizaInfo, isloading}) => {

    return (
        <div className="container_Card">
        
        <div className='pokemonList'>
            <h1 className='pokedexTitle'>Pokedex arrocha</h1>
            <button onClick={()=> alert('nothing yet')}>atualizar</button>
        </div>

        <div className="pokemonInfo">
            {isloading ?
              <>
              <p className="name">Loading...</p>
              <p className="pokemonCardImage">Loading Image...</p>
              <p className="type">Loading Types...</p>
              </>
              :
              <>
              <p className="name">{Pokename}</p>
              <img className="pokemonCardImage" src={PokeImage}/>
              <p className="type">{PokeType}</p>
              </>
            }
        <input type={"number"} className="input style_fields" id="Input" onChange={atualizaInfo} placeholder="Search by number (1, 1010)"/>
        </div>
    </div>
    )

}