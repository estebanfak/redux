import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { API_CALLS_REQUEST, API_CALLS_SUCCESS, API_CALLS_FAILURE } from '../actions/asyncActions'

// Watcher SAGA
// Listen the API_CALL_REQUEST action

export function* watcherSaga(){
    // Listens the action and starts a Worker SAGA

    // yield sirve para paraar y ejecutar algo que no está dentro de ésta función
    yield takeLatest(API_CALLS_REQUEST, workerSaga)
}

// Worker SAGA
// Is called from the watcher SAGA, does the login and Dispatches an action
export function* workerSaga(action){
    try {
        const response = yield call(fetchHttp(action.payload.request))
        // We obtain token from response
        const token = response.data.token;
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        })
    };
}

function fetchHttp(request){
    return function(){
        return (axios(request))
    }
}