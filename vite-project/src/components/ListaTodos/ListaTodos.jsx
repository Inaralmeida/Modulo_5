import React from 'react'
import ToDoIndividual from '../ToDoIndividual/ToDoIndividual'
import S from './ListaTodos.module.css'

const ListaTodos = ({ lista }) => {
  return (
    <div className={S.container}>
      <h2 className={S.titulo}>Lista de Tarefas</h2>
      <div className={S.lista}>
        <ToDoIndividual
          titulo='Estudar'
          descricao='Estudar como pegar o state de cada input e salvar no mesmo lugar.'
        />
      </div>
    </div>
  )
}

export default ListaTodos