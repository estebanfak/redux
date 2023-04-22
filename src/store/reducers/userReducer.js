import { API_CALLS_FAILURE, API_CALLS_REQUEST, API_CALLS_SUCCESS } from "../actions/asyncActions";

// Initial userState
const initialState = {
    fetching: false,
    token: null,
    error: null,
    logged: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_CALLS_REQUEST:
            return {
                ...state,
                fetching: true,
                token: null,
                error: null,
                logged: false
            }
        case API_CALLS_SUCCESS:
            return {
                ...state,
                fetching: false,
                token: action.payload.token,
                error: null,
                logged: true,
            } 
        case API_CALLS_FAILURE:
            return {
                ...state,
                fetching: false,
                token: null,
                error: action.payload.error,
                logged: false,
            } 
    
        default:
            return state;
    }

}