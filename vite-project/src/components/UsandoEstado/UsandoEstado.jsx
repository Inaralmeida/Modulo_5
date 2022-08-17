import { useState } from 'react'

const UsandoEstado = () => {
  const [contador, setContador] = useState(250)
  const [nome, setNome] = useState('T17')

  function handleChange(e) {
    setNome(e.target.value)
  }

  return (
    <div className="App">
      <h1>Aula 5</h1>
      <h1>Contador: {contador}</h1>

      <button onClick={() => setContador(contador + 1)}>Add + 1</button>

      <form>
        <h2>{nome}</h2>
        <label htmlFor="">Nome</label>
        <input type="text" value={nome} onChange={handleChange} />
      </form>
    </div>
  )
}

export default UsandoEstado