import React, { StrictMode } from 'react'
import S from './AdoteAqui.module.css'
import Descricao from '../../Components/Descricao/Descricao'
import Forms from '../../Components/Forms/Forms'
import Footer from '../../Components/Footer/Footer'
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