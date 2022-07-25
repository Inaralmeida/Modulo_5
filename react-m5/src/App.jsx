
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Aula3 from './Pages/Aulas/Aula3/Aula3'
import Aula4 from './Pages/Aulas/Aula4/Aula4'
import Aula5 from './Pages/Aulas/Aula5/Aula5'
import Aula6 from './Pages/Aulas/Aula6/Aula6'
import Aula7 from './Pages/Aulas/Aula7/Aula7'
import Aula8 from './Pages/Aulas/Aula8/Aula8'
import BuscaPokemon from './Pages/BuscaPokemon/BuscaPokemon'
import RandomUser from './Pages/RandomUser/RandomUser'
import Sedex10 from './Pages/Sedex10/Sedex10'
import AdoteAqui from './Pages/AdoteAqui/AdoteAqui'
import Header from './Components/Header/Header'
import ProdutoIndividual from './Pages/ProdutoIndividual/ProdutoIndividual'
import Ecommerce from './Pages/Ecommerce/Ecommerce'

function App() {
  return (
    <BrowserRouter >
      {/* Estatico */}
      <Header titulo='Header estatico' />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/produtos/:nome' element={<ProdutoIndividual />} />

        <Route path='projetos' >
          <Route path='pokemons' element={<BuscaPokemon />} />
          <Route path='sedex' element={<Sedex10 />} />
          <Route path='adoteaqui' element={<AdoteAqui />} />
          <Route path='randomuser' element={<RandomUser />} />
          <Route path='ecommerce' element={<Ecommerce />} />
        </Route>

        <Route path='aulas'>
          <Route path='aula3' element={<Aula3 />} />
          <Route path='aula4' element={<Aula4 />} />
          <Route path='aula5' element={<Aula5 />} />
          <Route path='aula6' element={<Aula6 />} />
          <Route path='aula7' element={<Aula7 />} />
          <Route path='aula8' element={<Aula8 />}>
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
