import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails"
import { PokemonList } from './components/PokemonList/PokemonList'
import './style.css'
function App() {

  return (

      <div className="container">

          <PokemonDetails />
          <PokemonList />

      </div>

  )
}

export default App
