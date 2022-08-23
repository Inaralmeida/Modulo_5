import React, { useEffect, useState } from 'react'

const UsandoEffeitos = () => {

  const [dadosRequisicao, setDadosRequisicao] = useState()
  const [pagina, setPagina] = useState(1)
  const [contador, setContador] = useState(0)

  async function handleRequest() {
    const requisicao = await fetch('https://randomuser.me/api')
    const json = await requisicao.json()
    const resultados = json.results[0]
    setDadosRequisicao(resultados)
  }

  //Executa no processo de montagem da tela (carregamento)
  useEffect(() => {
    handleRequest()
  }, [])

  useEffect(() => {
    console.log(contador)
    console.log('O Contador foi atualizado');
  }, [contador])

  useEffect(() => {
    alert("Requisicao feita com sucesso")
  }, [dadosRequisicao])

  return (
    <div>
      <button onClick={handleRequest}>Buscar usuario</button>
      {dadosRequisicao ? (
        <div>
          <h1>Nome: {dadosRequisicao.name.first}</h1>
        </div>
      ) : <p>Carregando...</p>}


      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Add</button>
    </div>
  )
}

export default UsandoEffeitos