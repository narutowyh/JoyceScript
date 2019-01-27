import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDom from 'react-dom'
import Home from './routes/Home/index'


const a = async () => {
  const { default: minus, plus, multiply } = await import(/* webpackChunkName: "math" */ './math')
  console.info(minus, plus, multiply)
}
a().then()

const routers = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDom.render(routers, document.querySelector('#root'))
