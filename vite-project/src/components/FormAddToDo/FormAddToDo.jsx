import React from 'react'
import { useState } from 'react'
import S from './FormAddToDo.module.css'

const FormAddToDo = ({ dadosForm, handleChange, handleClick }) => {
  useState
  return (
    <form className={S.container}>
      <h2 className={S.title}>Nova Tarefa</h2>

      <fieldset className={S.fieldset}>

        <label htmlFor="">Titulo</label>
        <input type="text"
          //3 -Passar o estado que recebe como props para o value de input, especificando a chave 
          value={dadosForm.titulo}
          //5 - Passar a função recebida como props para o onchange do input (Lembre-se de passar os parametros)
          onChange={(e) => handleChange(e, 'titulo')} />

      </fieldset>
      <fieldset className={S.fieldset}>

        <label htmlFor="">Descrição</label>
        <textarea
          //3 - Passar o estado que recebe como props para o value de input, especificando a chave 
          value={dadosForm.descricao}
          //5 - Passar a função recebida como props para o onchange do input (Lembre-se de passar os parametros)
          onChange={(e) => handleChange(e, 'descricao')} />

      </fieldset>

      <button onClick={handleClick}>Adicionar Tarefa</button>
    </form>
  )
}

export default FormAddToDo