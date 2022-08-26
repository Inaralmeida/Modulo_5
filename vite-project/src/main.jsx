import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ToDoListProvider from './context/ToDoListProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoListProvider>
      <App />
    </ToDoListProvider>
  </React.StrictMode>
)
