import React from 'react'
import { useContext } from 'react'
import { ToDoContext } from '../../context/ToDoListProvider'


const Home = () => {

  const { lista } = useContext(ToDoContext)
  console.log(lista)
  return (
    <div>
      <h1>Home - T17</h1>
    </div>
  )
}

export default Home