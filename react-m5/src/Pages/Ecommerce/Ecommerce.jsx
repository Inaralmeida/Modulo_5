import React from 'react'
import { Link } from 'react-router-dom'
import S from './Ecommerce.module.css'
import Title from '../../Components/Title/Title'

const Ecommerce = () => {
  const produtos = [
    { id: 1, nome: 'Celular', preco: 1250 },
    { id: 2, nome: 'CPU gamer', preco: 2500 },
    { id: 3, nome: 'Monitor', preco: 1000 },
    { id: 4, nome: 'Teclado mecanico', preco: 450 },
    { id: 5, nome: 'Caixa de som', preco: 150 },
    { id: 6, nome: 'Webcam 1080p', preco: 100 },
    { id: 7, nome: 'Mousepad gamer', preco: 50 },
    { id: 8, nome: 'Mouse gamer ', preco: 130 },
    { id: 9, nome: 'Fone de ouvido', preco: 250 },
    { id: 10, nome: 'Suporte fone ed ouvido', preco: 30 }
  ]
  return (
    <div className={S.container}>
      <Title text='Ecommerce' />
      <ul className={S.content}>

        {produtos.map(produto => {
          return (
            <li className={S.card}>
              <h3>{produto.nome}</h3>
              <p>{produto.preco}</p>
              <Link
                className={S.link}
                to={`/produtos/${produto.nome}`}>Ver produto</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Ecommerce