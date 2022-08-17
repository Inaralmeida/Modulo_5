import React from 'react'
import S from './Title.module.css'

const Title = ({ texto }) => {
  return (
    <h1 className={S.title}>{texto}</h1>
  )
}

export default Title