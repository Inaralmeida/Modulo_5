import React from 'react'
import Title from '../Title/Title'
import S from './Header.module.css'

const Header = ({ texto }) => {
  return (
    <header className={S.header}>
      <Title texto={texto} />
    </header>
  )
}

export default Header