import { createStore, compose } from 'redux'
import rootReducer from './reducer/index'

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
    // applyMiddleware(thunk)
    ))
}
