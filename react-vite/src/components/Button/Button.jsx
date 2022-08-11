import React from 'react'

const Button = ({ texto, cor }) => {

  return (
    <button style={{ color: cor }} >{texto}</button>
  )
}

export default Button