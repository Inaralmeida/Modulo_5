import React from 'react'
import S from './Button.module.css'

const Button = ({ text, color }) => {
  const colors = {
    azul: '#000fff',
    vermelho: '#ff0000',
    amarelo: '#fff000'
  }
  return (
    <button type='text' className={S.btn}>{text}</button>
  )
}

export default Button