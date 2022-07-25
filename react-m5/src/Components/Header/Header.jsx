import React from 'react'
import { Link } from 'react-router-dom'
import S from './Header.module.css'

const Header = ({ titulo }) => {
  return (
    <header className={S.container}>

      <h1>{titulo}</h1>

      <nav>
        <Link className={S.link} to='/'>Home</Link>
        <Link className={S.link} to='/projetos/pokemons'>Pokemons</Link>
        <Link className={S.link} to='/projetos/adoteaqui'>Adote Aqui</Link>
        <Link className={S.link} to='/projetos/randomUser'>Random User</Link>
        <Link className={S.link} to='/projetos/apod'>Apod</Link>
        <Link className={S.link} to='/projetos/sedex'>Sedex</Link>
        <Link className={S.link} to='/projetos/ecommerce'>Ecommerce</Link>
        <Link className={S.link} to='/aulas/aula3'>Aula3</Link>
        <Link className={S.link} to='/aulas/aula4'>Aula4</Link>
        <Link className={S.link} to='/aulas/aula5'>Aula5</Link>
        <Link className={S.link} to='/aulas/aula6'>Aula6</Link>
        <Link className={S.link} to='/aulas/aula7'>Aula7</Link>
        <Link className={S.link} to='/aulas/aula8'>Aula8</Link>
      </nav>

    </header >
  )
}

export default Header