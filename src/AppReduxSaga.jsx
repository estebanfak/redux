import './App.css'
import LoginFormContainer from './components/containers/LoginFormContainer'
import TodosContainer from './components/containers/TodoContainer'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

function AppReduxSaga() {

  return (
    <div className="App">
      <TodosContainer filter='SHOW_ALL' />
      <TodoFormContainer/>
      <FilterOptions/>
      <LoginFormContainer/>
    </div>
  )
}

export default AppReduxSaga
