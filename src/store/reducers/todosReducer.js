// Initial TodosState

import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

// Initially todos is empty
let initialState = []
let nextTodoId = 1;


export const todosReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return[
                ...state,
                {
                    id: nextTodoId++,
                    text: action.payload.text,
                    completed: false
                }
            ]            
        case TOGGLE_TODO:
            return state.map((todo)=>
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            )
        default:
            return state;
    }
}