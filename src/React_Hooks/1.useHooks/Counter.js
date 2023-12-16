import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
      <>
          <p>{count }</p>
          <button onClick={() => setCount(count + 1)}>Click</button>
          <h1>Hello</h1>
      </>
  )
}

export default Counter