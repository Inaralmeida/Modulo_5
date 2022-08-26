import React, { useContext } from 'react'
import { useState } from 'react'
import FormAddToDo from '../../components/FormAddToDo/FormAddToDo'
import ListaTodos from '../../components/ListaTodos/ListaTodos'
import { ToDoContext } from '../../context/ToDoListProvider'
import S from './ToDo.module.css'
const ToDo = () => {

  return (
    <div className={S.container}>

      <FormAddToDo />

      {/* <ListaTodos /> */}
    </div>
  )
}

export default ToDo