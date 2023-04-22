import { compose, createStore, applyMiddleware } from "redux"
import { rootReducer } from "../reducers/rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from "../sagas/sagas"

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools())

    return store;
}

export const createAppAsyncStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    
    
    let store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(sagaMiddleware), 
            composeWithDevTools()
        )
    )

    // We init the watcher saga
    sagaMiddleware.run(watcherSaga)

    return store;
}