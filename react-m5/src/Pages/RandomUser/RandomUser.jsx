import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import S from './RandomUser.module.css'

const RandomUser = () => {
  const [user, setUser] = useState()

  async function handleRequest() {
    const response = await fetch('https://randomuser.me/api/')
    const json = await response.json();
    const results = json.results[0]
    setUser({
      nome: results.name.first,
      email: results.email,
      foto: results.picture.large
    })
  }

  useEffect(() => {
    handleRequest()
  }, [])
  return (
    <div className={S.container}>
      <div className={S.card}>
        <img src={!!user ? user.foto : ''} alt="" className={S.foto} />
        <article>
          <small>Nome</small>
          <p>{!!user && user.nome}</p>
        </article>
        <article>
          <small>Email</small>
          <p>{!!user && user.email}</p>
        </ article>
        <button onClick={handleRequest} className={S.button}>Gerar Usuario</button>
      </div>
    </div>
  )
}

export default RandomUser