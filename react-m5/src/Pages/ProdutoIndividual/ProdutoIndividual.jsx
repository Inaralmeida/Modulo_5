import React from 'react'
import { useParams } from 'react-router-dom'

const ProdutoIndividual = () => {
  let params = useParams()
  console.log(params);
  return (
    <div>
      <h1>Nome do produto {params.nome}</h1>
    </div>
  )
}

export default ProdutoIndividual