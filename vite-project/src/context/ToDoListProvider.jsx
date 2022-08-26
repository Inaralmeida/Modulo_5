import React, { createContext, useState } from "react";

//1 - Criar e exportar uma componente de contexto
export const ToDoContext = createContext()


//2 - Criar um componente (Provider) que passará as informações para outro componente
//2.1-Esse componente sempre recebera children como props
const ToDoListProvider = ({ children }) => {
  //5 - Criar o estado que será compartilhado com outros componentes
  const [dadosForm, setDadosForm] = useState({
    titulo: '',
    descricao: '',
    status: false
  })

  const [lista, setLista] = useState([])

  //6 - Criar a função que altera o estado
  function handleChange(e, nomeDaChave) {

    setDadosForm(

      {

        ...dadosForm,

        [nomeDaChave]:

          e.target.value
      }
    )
  }

  function handleClick(e) {
    e.preventDefault()

    console.log(dadosForm);

    setLista(

      [

        ...lista,


        dadosForm
      ]
    )


    setDadosForm({
      titulo: '',
      descricao: '',
      status: false
    })
  }

  //7 - Criar um objeto para enviar a função e o estado
  const contexto = {
    dadosForm: dadosForm,
    lista: lista,
    handleChange: handleChange,
    handleClick: handleClick
  }


  return (
    //3 - Retornar o seu contexto como provider
    <ToDoContext.Provider value={contexto}>
      {/* 4 - Passar children como filho */}
      {children}
    </ToDoContext.Provider>
  )
}

export default ToDoListProvider





//8 - Passar o objeto com a função e o estado como value para o provider


