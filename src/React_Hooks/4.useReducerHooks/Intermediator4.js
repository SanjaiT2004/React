import React, { useContext } from 'react'
import { countContext } from './UseReducerwithUseContext'

function Intermediator4() {
 const cntContext = useContext(countContext)
  return (
    <div>
      Component4 
          <button onClick={() => cntContext.countDispatch('increment')}> Increment</button>
          <button onClick={() => cntContext.countDispatch('decrement')}> Decrement</button>
          <button onClick={() => cntContext.countDispatch('reset')}> Reset</button>
        </div>
  )
}

export default Intermediator4