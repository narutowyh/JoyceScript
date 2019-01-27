import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Home from './routes/Home/Home'

const store = window.editorReduxStore = configureStore()

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
