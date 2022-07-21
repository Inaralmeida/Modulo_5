import React from 'react'
import { Link } from 'react-router-dom'
import S from './Header.module.css'

const Header = ({ titulo }) => {
  return (
    <header className={S.container}>

      <h1>{titulo}</h1>

      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/pokemons'>Pokemons</Link> |
        <Link to='/sedex'>Sedex</Link>
      </nav>

    </header>
  )
}

export default Header