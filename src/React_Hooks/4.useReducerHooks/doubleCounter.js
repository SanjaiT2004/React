import React, { useReducer } from 'react'
const InitialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state , action) => {
    switch (action.update) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment 2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement 2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return InitialState;
    }
}
function DoubleCounter() {

    const [count , dispatch] = useReducer(reducer , InitialState)
  return (
      <div>
          <div>
              <p> Counter1 - {count.firstCounter}</p>
              <p> Counter2 - {count.secondCounter }</p>
          </div>
          <div>
              <button onClick={() => dispatch({update:'increment',value: 5})}>increment counter 1</button>
              <button onClick={() => dispatch({update:'decrement',value: 5})}>decrement counter 1</button>
          </div>
          <div>
              <button onClick={() => dispatch({update:'increment 2',value: 5})}>increment counter 2</button>
              <button onClick={() => dispatch({update:'decrement 2',value: 5})}>decrement counter 2</button>
          </div>
          <div><button onClick={() => dispatch({update:'reset'})}>reset the counters</button></div>
    </div>
  )
}

export default DoubleCounter