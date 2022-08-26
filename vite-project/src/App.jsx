
import './App.css'
import BuscaPokemon from './Pages/BuscaPokemon/BuscaPokemon'
import Forms from './components/Form/Forms'
import Header from './components/Header/Header'
import RandomUser from './components/RandomUser/RandomUser'
import UsandoEffeitos from './components/UsandoEffeitos/UsandoEffeitos'
import UsandoEstado from './components/usandoEstado/usandoEstado'
import Sedex10 from './Pages/Sedex10/Sedex10'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ToDo from './Pages/ToDo/ToDo'

function App() {

  return (
    <BrowserRouter>
      {/* Estatico */}
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/sedex10' element={<Sedex10 />} />


        <Route path='/pokemon' element={<BuscaPokemon />} />
        <Route path='/todos' element={<ToDo />} />

      </Routes>
      {/* Estatico */}
    </BrowserRouter>
  )
}

export default App
