import React from 'react'
import Button from '../../Components/Button/Button'
import Forms from '../../Components/Forms/Forms'
import Header from '../../Components/Header/Header'
const Aula3 = () => {
  return (
    <div>
      <Header titulo='Aula 3' />
      <Forms />
      <Button text='Clique aqui' color='azul' />
      <Button text='Não Clique aqui' color='amarelo' />
      <Button text='Clique lá' color='vermelho' />
    </div>
  )
}

export default Aula3