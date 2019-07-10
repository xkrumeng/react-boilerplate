import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import store from './store'
import App from './App'

const About = () => <h2>页面一</h2>
const Users = () => <h2>页面二</h2>

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

render()
