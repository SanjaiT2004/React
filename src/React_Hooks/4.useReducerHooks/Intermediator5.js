import React, { useContext } from 'react'
import { countContext } from './UseReducerwithUseContext'

function Intermediator5() {
  const cntContext = useContext(countContext)
  return (
    <div>
      Component5
          <button onClick={() => cntContext.countDispatch('increment')}> Increment</button>
          <button onClick={() => cntContext.countDispatch('decrement')}> Decrement</button>
          <button onClick={() => cntContext.countDispatch('reset')}> Reset</button>
    </div>
  )
}

export default Intermediator5