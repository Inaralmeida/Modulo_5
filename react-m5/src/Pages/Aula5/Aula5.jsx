import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import '../../index.css'

const Aula5 = () => {
  const url = 'https://randomuser.me/api/'
  const [contador, setContador] = useState(0)
  const [valorInput, setValorInput] = useState('')
  const [estaLogado, setEstaLogado] = useState(false)
  const [respostaRequisicao, setRespostaRequisicao] = useState()

  function atualizaInput(event) {
    console.log(event.target.value);
    setValorInput(event.target.value)
  }

  function addMaisUm() {
    setContador(contador + 1)
  }

  function handleFazerLogin() {
    setEstaLogado(true)
  }

  async function handleRequisicao() {
    const response = await fetch(url)
    const json = await response.json()
    const results = json.results[0]
    setRespostaRequisicao(results)
    console.log(results);
  }
  return (
    <div className="container">
      <Header titulo='Aula5' />

      {estaLogado ?
        <h2>Olá {valorInput}</h2>
        :
        <h2> Faça o login</h2>
      }

      <input type="text" value={valorInput}
        onChange={(event) => atualizaInput(event)}
      />

      <button onClick={handleFazerLogin}>Fazer login</button>

      <h1>{contador}</h1>
      <button onClick={addMaisUm}>Adicionar</button>


      <h2>{!!respostaRequisicao && respostaRequisicao.email}</h2>
      <button onClick={handleRequisicao}>Fazer requisicao</button>
    </div>
  )
}

export default Aula5