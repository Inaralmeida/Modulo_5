
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aula3 from './Pages/Aulas/Aula3/Aula3'
import Aula4 from './Pages/Aulas/Aula4/Aula4'
import Aula5 from './Pages/Aulas/Aula5/Aula5'
import BuscaPokemon from './Pages/BuscaPokemon/BuscaPokemon'
import Aula6 from './Pages/Aulas/Aula6/Aula6'
import RandomUser from './Pages/RandomUser/RandomUser'
import Aula7 from './Pages/Aulas/Aula7/Aula7'
import Sedex10 from './Pages/Sedex10/Sedex10'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'

function App() {
  return (
    <BrowserRouter >
      {/* Estatico */}
      <Header titulo='Header estatico' />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/pokemons' element={<BuscaPokemon />} />
        <Route path='/sedex' element={<Sedex10 />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
