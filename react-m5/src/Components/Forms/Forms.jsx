import React from 'react'
import Button from '../Button/Button'

const Forms = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <form action="">
        <input type="text" name="" id="" placeholder='Digite seu nome' />
        <input type="email" name="" id="" placeholder='Digite seu email' />

        <Button text='cadastrar' color='azul' />
      </form>
    </div>
  )
}

export default Forms