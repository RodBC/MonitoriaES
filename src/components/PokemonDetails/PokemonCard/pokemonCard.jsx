import "./style.css"

export const PokemonCard = ({Pokename, PokeImage, PokeType, atualizaInfo, isloading}) => {

    return (
        <div className="leftSideScreen">
        
        <div className="divAtualizar">
            <input type={"number"} className="inputNumber" id="Input" onChange={atualizaInfo} placeholder="Search by number (1, 1010)"/>
            <button className="atualizarPokemon">atualizar</button>
        </div>

        <div className="pokemonInfo">
            {isloading ?
              <>
              <p className="PokeName">Loading...</p>
              <p className="pokemonCardImage">Loading Image...</p>
              <p className="Poketype">Loading Types...</p>
              </>
              :
              <>
              <p className="PokeName">{Pokename}</p>
              <img className="pokemonCardImage" src={PokeImage}/>
              <p className="Poketype">{PokeType}</p>
              </>
            }
        </div>
    </div>
    )

}