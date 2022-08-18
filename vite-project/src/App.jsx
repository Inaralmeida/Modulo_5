
import './App.css'
import BuscaPokemon from './components/BuscaPokemon/BuscaPokemon'
import Forms from './components/Form/Forms'
import Header from './components/Header/Header'
import RandomUser from './components/RandomUser/RandomUser'
import UsandoEstado from './components/usandoEstado/usandoEstado'

function App() {

  return (
    <div className='app'>
      <Header texto='Aula 4' />
      <Forms />

      {/* <UsandoEstado /> */}

      {/* <RandomUser /> */}

      {/* <BuscaPokemon /> */}
    </div>
  )
}

export default App
