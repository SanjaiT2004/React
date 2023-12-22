import React, { useReducer } from 'react'

const InitialState = 0;
function Counter() {
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return InitialState;
        }
    }
    const [count, dispatch] = useReducer(reducer, InitialState)
    {/** We are using the simple state and simple action which means we are using the variable(count) only  */}
  return (
      <div>
          <p>Count - { count}</p>
          <button onClick={() => dispatch('increment')}> Increment</button>
          <button onClick={() => dispatch('decrement')}> Decrement</button>
          <button onClick={() => dispatch('reset')}> Reset</button>
    </div>
  )
}

export default Counter