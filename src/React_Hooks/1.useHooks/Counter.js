import React, {  useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
      <>
          <p>{count }</p>
          <button onClick={() => setCount(count + 1) }>Increment { count }</button>
          <button onClick={() => setCount(count - 1)}>Decrement { count }</button>
          <button onClick={() => setCount(0)}>Reset { count }</button>
          <h1>Hello</h1>
      </>
  )
}

export default Counter