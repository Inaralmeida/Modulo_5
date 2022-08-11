import React from 'react'
import Button from '../Button/Button'
import Label from '../Label/Label'

const Form = () => {
  return (
    <form>
      <Label texto='Nome:' />
      <input type="text" />
      <Label texto='Email:' />
      <input type="email" />
      <Label texto='Descrição:' />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <Button texto='salvar' cor='tomato' />
    </form>
  )
}

export default Form