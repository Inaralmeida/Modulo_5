import React from 'react'
import S from './Button.module.css'

const Button = ({ texto, onClick }) => {
  return (
    <button
      className={S.btn}
      onClick={onClick} >{texto}</button>
  )
}

export default Button

