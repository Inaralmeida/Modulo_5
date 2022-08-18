import React from 'react'
import Button from '../Button/Button'
import Label from '../Label/Label'
import S from './Form.module.css'
import formAnimado from '../../assets/formAnimado.svg'


const Forms = () => {

  function handleSalvar(e) {
    e.preventDefault()
    console.log('O Btn funciona')
  }

  return (
    <div className={S.container}>
      <picture className={S.picture}>
        <img src={formAnimado} alt='Formulario' />
      </picture>
      <form className={S.form}>
        <Label texto='Nome' />
        <input type="text" placeholder='nome' id='Nome' className={S.input} />

        <Label texto='Email' />
        <input type="email" placeholder='Email'
          className={S.input}
        />

        <Label texto='Telefone' />
        <input type="tel" placeholder='Telefone'
          className={S.input}
        />

        <Label texto='Descrição' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Digite sua mensagem'></textarea>

        <Button texto='Qualquer Um' onClick={handleSalvar} />
      </form>
    </div>
  )
}

export default Forms