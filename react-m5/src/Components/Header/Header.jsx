import React from 'react'
import S from './Header.module.css'

const Header = ({ titulo }) => {
  return (
    <header className={S.container}>

      <h1>{titulo}</h1>

    </header>
  )
}

export default Header