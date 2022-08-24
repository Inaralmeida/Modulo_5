import React from 'react'
import S from './ToDoIndividual.module.css'
import { RiCheckboxCircleFill } from 'react-icons/ri'

const ToDoIndividual = ({ titulo, descricao, status }) => {
  return (
    <div className={S.card}>
      <section className={S.section}>
        <small>Titulo:</small>
        <p>{titulo}</p>
        <small>Descrição:</small>
        <p>{descricao}</p>
      </section>

      <RiCheckboxCircleFill
        size={30}
      />
    </div>
  )
}

export default ToDoIndividual