import React from 'react'
import { Link } from 'react-router-dom'

const Aula8 = () => {
  const produtos = [
    { id: 1, nome: 'Celular', preco: 1250 },
    { id: 2, nome: 'Computador', preco: 2500 },
    { id: 3, nome: 'Monitor', preco: 1000 },
    { id: 4, nome: 'Teclado mecanico', preco: 450 },
  ]
  return (
    <div>
      {produtos.map(produto => {
        return (
          <div>
            <h3>{produto.nome}</h3>
            <p>{produto.preco}</p>
            <Link to={`/produtos/${produto.nome}`}>Ver produto</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Aula8