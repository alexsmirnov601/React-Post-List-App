import React from 'react'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const incrementFn = () => {
    setCount(count + 1)
  }

  const decrementFn = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementFn}>Increment</button>
      <button onClick={decrementFn}>Decrement</button>
    </div>
  )
}

export default Counter
