import React from 'react'
import { useState } from 'react'
import Title from '../../../Components/Title/Title'


const Aula6 = () => {
  const [contador, setContador] = useState(0)
  const [dadosRequisicao, setDadosRequisicao] = useState({
    nome: '',
    email: '',
    foto: ''
  })
  console.log(dadosRequisicao);
  async function handleRequisicao() {
    const url = 'https://randomuser.me/api/'
    const request = await fetch(url)
    const json = await request.json()
    const results = json.results[0]
    setDadosRequisicao({
      nome: results.name.first,
      email: results.email,
      foto: results.picture.large
    })
    console.log(results);
  }
  return (
    <div>
      <Title text='Aula 6' />
      <h2>{contador}</h2>
      <button onClick={handleRequisicao}>requisicao</button>
      <img src={dadosRequisicao.foto} alt="" />
      <p>Nome: {dadosRequisicao.nome}</p>
      <p>Email: {dadosRequisicao.email} </p>

    </div>
  )
}

export default Aula6