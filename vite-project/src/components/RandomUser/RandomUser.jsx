import React from 'react'
import { useState } from 'react'

const RandomUser = () => {
  const [informacoes, setInformacoes] = useState()

  async function handleRequisicao() {
    const response = await fetch('https://randomuser.me/api')
    const json = await response.json()
    setInformacoes(json.results[0])

  }
  return (
    <div>RandomUser

      <button onClick={handleRequisicao}>Fazer Requisição</button>
      <h1>{informacoes ? informacoes.name.first : ''}</h1>
      <img src={informacoes ? informacoes.picture.large : ''} alt="" />
    </div>
  )
}

export default RandomUser