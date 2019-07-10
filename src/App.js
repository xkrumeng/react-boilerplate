import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import { increment } from './actions/index'

class App extends React.Component {
  onClick () {
    this.props.dispatch(increment())
  }

  onClick2 () {
    this.props.dispatch({ type: 'INCREMENT_ASYNC' })
  }

  render () {
    return (
      <div>
        <div>测试</div>
        <nav>
          <li><Link to="/about/">关于</Link></li>
          <li><Link to="/users/">页面二</Link></li>
        </nav>
        <br/>
        <div>redux & redux-saga测试</div>
        <div>current number： {this.props.number} <Button onClick={() => this.onClick()}>点击+1</Button></div>
        <div>current number： {this.props.number} <Button onClick={() => this.onClick2()}>点击2秒后+1</Button></div>
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    number: state.number
  }
}

export default connect(stateToProps)(App)
