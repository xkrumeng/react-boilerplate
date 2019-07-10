import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import store from './store'
import App from './App'
import DevTools from './container/DevTools'

const About = () => <h2>页面一</h2>
const Users = () => <h2>页面二</h2>

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </Switch>
        </Router>
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('root')
  )
}

render()
