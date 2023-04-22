import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createAppAsyncStore, createAppStore } from './store/config/storeConfig'
import { Provider } from 'react-redux'
import AppReduxSaga from './AppReduxSaga'

// let appStore = createAppStore()
let appAsyncStore = createAppAsyncStore()

ReactDOM.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
