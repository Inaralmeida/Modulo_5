import React from 'react'
import Title from '../Title/Title'
import S from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = ({ texto }) => {
  return (
    <header className={S.header}>
      <Title texto={texto} />
      <nav>
        <Link className={S.link} to='/'>Home</Link>
        <Link className={S.link} to='/sedex10'>Sedex 10</Link>
        <Link className={S.link} to='/pokemon'>Busca Pokemons</Link>
      </nav>
    </header>
  )
}

export default Header