import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../pure/TodoList'
import { toggleTodo } from '../../store/actions/actions'


// Filter Todos
const filterTodos = ({todos, filter}) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;            
        case 'SHOW_ACTIVE':
            return todos.filter((todo)=> !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo)=> todo.completed);
        default:
            return todos;
    }
}


const mapStateToProps = state => {
    return {
      todos: filterTodos({
        todos: state.todosState,
        filter: state.filterState
      })
    };
  };
  


const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            
            dispatch(toggleTodo(id))
        }
    }
}

// We connect state & dispatch to TodoList Props
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;