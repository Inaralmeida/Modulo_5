import React from 'react'

const Button = ({ text, color }) => {
  const colors = {
    azul: '#000fff',
    vermelho: '#ff0000',
    amarelo: '#fff000'
  }
  return (
    <button type='text' style={{ backgroundColor: colors[color] }}>{text}</button>
  )
}

export default Button