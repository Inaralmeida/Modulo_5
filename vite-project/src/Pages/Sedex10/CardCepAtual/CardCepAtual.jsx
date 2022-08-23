import React from 'react'
import S from './CardCepAtual.module.css'

const CardCepAtual = ({ cepAtual }) => {
  const { cep, logradouro, bairro, cidade, uf } = cepAtual
  return (
    <div className={S.container}>

      <p><span className={S.key}>Cep:</span> {cep} </p>
      <p><span className={S.key}>Logradouro:</span> {logradouro}</p>
      <p><span className={S.key}>Bairro:</span> {bairro}</p>
      <p><span className={S.key}>Cidade:</span> {cidade}</p>
      <p><span className={S.key}>UF:</span> {uf}</p>
    </div>
  )
}

export default CardCepAtual