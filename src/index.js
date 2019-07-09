import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import './test.less'

class TodoList extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }
  render () {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

class TodoApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = { items: [], text: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <Button onClick={this.handleSubmit}>
            Add #{this.state.items.length + 1}
          </Button>
        </form>
      </div>
    )
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todos-example')
)
console.log(module.hot)
if (module.hot) {
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('todos-example')
  )
}
