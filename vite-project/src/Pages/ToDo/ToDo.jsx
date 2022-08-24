import React from 'react'
import { useState } from 'react'
import FormAddToDo from '../../components/FormAddToDo/FormAddToDo'
import ListaTodos from '../../components/ListaTodos/ListaTodos'
import S from './ToDo.module.css'
const ToDo = () => {
  //1 - Crie um estado para o forms
  const [dadosForm, setDadosForm] = useState({
    titulo: '',
    descricao: '',
    status: false
  })

  //4 - Criar uma função que receba o evento de change e o nome da chave que será alterada
  function handleChange(e, nomeDaChave) {
    //6 - Chamar a função que vai alterar o estado 
    setDadosForm(
      //7 - Criar um objeto novo  para o estado
      {
        //8 - Salvar uma copia do estado antigo
        ...dadosForm,
        //9 - Usamos o nome da chave para identificar qual chave do estado será alterada
        [nomeDaChave]:
          //10 - Passamos o novo valor digitado para a chave do estado
          e.target.value
      }
    )
  }

  console.log(dadosForm);


  return (
    <div className={S.container}>

      <FormAddToDo
        //2 - Passar o estado como props
        dadosForm={dadosForm}
        //5 - Passar a função de change como props
        handleChange={handleChange} />

      <ListaTodos />
    </div>
  )
}

export default ToDo