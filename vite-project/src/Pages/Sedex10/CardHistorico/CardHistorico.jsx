import React from 'react'
import S from './CardHistorico.module.css'

const CardHistorico = ({ cepAtual }) => {
  const { cep, logradouro, bairro, cidade, uf } = cepAtual
  return (
    <div className={S.container}>
      <p>Cep: {cep}</p>
      <p>Logradouro: {logradouro}</p>
      <p>Bairro: {bairro}</p>
      <p>Cidade: {cidade}</p>
      <p>UF: {uf}</p>
    </div>
  )
}

export default CardHistorico