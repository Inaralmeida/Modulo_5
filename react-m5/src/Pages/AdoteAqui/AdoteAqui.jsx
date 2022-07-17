import React, { StrictMode } from 'react'
import S from './AdoteAqui.module.css'
import Descricao from '../Aula4/Componentes/Descricao/Descricao'
import Forms from '../Aula4/Componentes/Forms/Forms'
import Footer from '../Aula4/Componentes/Footer/Footer'
import Header from '../../Components/Header/Header'

const AdoteAqui = () => {
  return (
    <div className={S.container}>
      <Header titulo='Adote aqui' />
      <Descricao />
      <Forms />
      <Footer />
    </div>
  )
}

export default AdoteAqui