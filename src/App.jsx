import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodosContainer from './components/containers/TodoContainer'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

function App() {

  return (
    <div className="App">
      <TodosContainer filter='SHOW_ALL' />
      <TodoFormContainer/>
      <FilterOptions/>
    </div>
  )
}

export default App
