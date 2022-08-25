import React from 'react'
import ToDoIndividual from '../ToDoIndividual/ToDoIndividual'
import S from './ListaTodos.module.css'

const ListaTodos = ({ lista }) => {
  return (
    <div className={S.container}>
      <h2 className={S.titulo}>Lista de Tarefas</h2>
      <div className={S.lista}>
        {lista.map((tarefa, index) => {
          return (
            <ToDoIndividual
              key={index}
              titulo={tarefa.titulo}
              descricao={tarefa.descricao}
              status={tarefa.status}
            />
          )
        })}


      </div>
    </div>
  )
}

export default ListaTodos