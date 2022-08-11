import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button/Button'
import Form from './components/Form/Form'

function App() {

  const nome = "Aline"

  return (
    <div className="App" id='' title='' >
      <h1 id='titulo'>{nome}</h1>
      <Button texto='clique aqui' cor='tomato' />
      <Button texto='Não clique' cor='#ffb200' />
      <Button texto='Clique Lá' cor='#00fff0' />
      <Form />
    </div>
  )
}

export default App
