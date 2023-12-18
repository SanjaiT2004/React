import React, { useState } from 'react'

function Counter2() {
    const [count , setCount] = useState(0)
    const Increment5 = () => {
        for (let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
            //whenever working one value we need to use previous function call value
        }
   }
    return (
        <div>
            <p>{ count}</p>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1 )}>Increment</button>
          <button onClick={() => setCount(count - 1 )}>Decrement</button>
          <button onClick={Increment5}>Increment 5</button>
    </div>
  )
}

export default Counter2