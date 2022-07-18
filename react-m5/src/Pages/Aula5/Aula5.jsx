import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import '../../index.css'

const Aula5 = () => {
  const url = 'https://randomuser.me/api/'
  const [contador, setContador] = useState(0)

  const [valorInput, setValorInput] = useState('')

  function atualizaInput(event) {
    console.log(event.target.value);
    setValorInput(event.target.value)
  }
  function addMaisUm() {
    setContador(contador + 1)
  }
  return (
    <div className="container">
      <Header titulo='Aula5' />

      <input type="text" value={valorInput}
        onChange={(event) => atualizaInput(event)}
      />
      <h1>{contador}</h1>
      <button onClick={addMaisUm}>Adicionar</button>
    </div>
  )
}

export default Aula5