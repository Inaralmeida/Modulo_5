import React from 'react'
import S from './BuscaPokemon.module.css'

const BuscaPokemon = () => {

  return (
    <div className={S.container}>
      <section className={S.busca}>
        <input type="text" className={S.input} placeholder='Digite o nome ou o ID do pokemon' />
        <button className={S.button}>Buscar Pokemon</button>

      </section>
      <section className={S.card}>
        <picture className={S.contentFoto}>
          <img className={S.foto} src={''} />

        </picture>
        <p className={S.nome}></p>
      </section>
    </div>
  )
}

export default BuscaPokemon