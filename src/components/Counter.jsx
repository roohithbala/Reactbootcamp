import React, { useState } from 'react'

const Counter = () => {
  const init = 0
  const [count, setCount] = useState(init)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(init)}>Reset</button>
    </>
  )
}

export default Counter
