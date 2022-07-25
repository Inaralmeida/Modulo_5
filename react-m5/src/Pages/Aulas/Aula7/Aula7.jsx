import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../../../Components/Header/Header'
import Title from '../../../Components/Title/Title'

const Aula7 = () => {
  const [contador, setContador] = useState(0)
  const [contador2, setContador2] = useState(0)

  function olaMundo() {
    console.log('Ola mundo');
  }

  //montagem
  useEffect(() => {
    olaMundo()
  }, [])

  // Atualização
  useEffect(() => {
    setContador2(contador2 + 1)
  }, [contador])
  return (
    <div>
      <Title text='Aula 7' />
      <h1>contador 1: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <h1>contador 2: {contador2}</h1>
    </div>
  )
}

export default Aula7