import React from 'react'

class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.incrementFn = this.incrementFn.bind(this)
    this.decrementFn = this.decrementFn.bind(this)
  }

  incrementFn = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrementFn = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementFn}>Increment</button>
        <button onClick={this.decrementFn}>Decrement</button>
      </div>
    )
  }
}

export default ClassCounter
