import React from 'react'
import S from './Descricao.module.css'
import gato2 from '../../images/gato2.svg'
const Descricao = () => {
  return (
    <div className={S.container}>
      <p className={S.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam ducimus aspernatur quaerat quidem necessitatibus dolorum voluptates iure eius ipsa! Autem suscipit voluptates laborum obcaecati facilis hic reiciendis officia non!</p>
      <img src={gato2} alt="" className={S.img} />
    </div>
  )
}

export default Descricao