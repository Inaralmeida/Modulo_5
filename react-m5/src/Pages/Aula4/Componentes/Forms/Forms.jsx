import React from 'react'
import Button from '../../../../Components/Button/Button'
import PetShop from '../../../../images/petShop.svg'
import S from './Form.module.css'

const Forms = () => {
  return (
    <div className={S.container}>
      <h2>Cadastre-se e Adote aqui!</h2>

      <section className={S.section}>
        <img src={PetShop} alt="" className={S.img} />
        <form className={S.form} >
          <fieldset className={S.fieldset}>

            <label htmlFor="" className={S.label}>Nome:</label>
            <input className={S.input} type="text" name="" id="" placeholder='Digite seu nome' />
          </fieldset>
          <fieldset className={S.fieldset}>

            <label htmlFor="" className={S.label}>Email:</label>
            <input className={S.input} type="email" name="" id="" placeholder='Digite seu email' />
          </fieldset>
          <fieldset className={S.fieldset}>

            <label htmlFor="" className={S.label}>Telefone:</label>
            <input className={S.input} type="email" name="" id="" placeholder='Digite seu Telefone' />
          </fieldset>

          <Button text='cadastrar' color='vermelho' />
        </form>


      </section>
    </div>
  )
}

export default Forms