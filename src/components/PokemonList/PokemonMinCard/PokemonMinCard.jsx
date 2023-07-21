import "./style.css";
export const PokemonMinCard = ({ pokemonName }) => {
  return (
    <>
      <div className="divPokemonItem">
        <p className="pokemonItemName">{pokemonName}</p>
      </div>
    </>
  );
};
