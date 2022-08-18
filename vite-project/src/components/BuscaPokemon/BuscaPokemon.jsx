import React, { useState } from 'react'
import { useEffect } from 'react'
import S from './BuscaPokemon.module.css'

const BuscaPokemon = () => {
  const [valorInput, setValorInput] = useState('250')
  const [pokemon, setPokemon] = useState()

  function handleSetInput(target) {
    setValorInput(target.value)
  }

  async function handleRequisicao() {
    const url = `https://pokeapi.co/api/v2/pokemon/${valorInput}`
    const response = await fetch(url)
    const json = await response.json()

    const resposta = {
      foto: json.sprites.front_default,
      nome: json.name
    }
    setPokemon(resposta)
    setValorInput('')
  }

  useEffect(() => {
    handleRequisicao()
  }, [])
  return (
    <div className={S.container}>
      <section className={S.busca}>
        <input
          type="text"
          className={S.input}
          placeholder='Digite o nome ou o ID do pokemon'
          value={valorInput}
          onChange={({ target }) => handleSetInput(target)}
        />
        <button className={S.button}
          onClick={handleRequisicao}
        >Buscar Pokemon</button>

      </section>
      <section className={S.card}>
        <picture className={S.contentFoto}>
          <img className={S.foto} src={!!pokemon ? pokemon.foto : ''} />

        </picture>
        <p className={S.nome}>{!!pokemon && pokemon.nome}</p>
      </section>


    </div>
  )
}

export default BuscaPokemon