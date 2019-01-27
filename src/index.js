import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './store/reducer/index'
import Home from './routes/Home/Home'
import { helloSaga } from './sagas/helloSaga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(helloSaga)

window.store = store

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
