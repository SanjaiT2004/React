import React, { useReducer } from 'react'
import Intermediator1 from './Intermediator1';
import Intermediator2 from './Intermediator2';
import Intermediator3 from './Intermediator3';
const InitialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return InitialState
    }
}
export const countContext = React.createContext();
function UseReducerwithUseContext() {
    const [count,dispatch] = useReducer(reducer,InitialState)
    return (
        <countContext.Provider value={{countState : count,countDispatch:dispatch}}>
            <div>
                <p>Counter - {count}</p>
                <Intermediator1 />
                <Intermediator2 />
                <Intermediator3/>
            </div>
        </countContext.Provider>
  )
}

export default UseReducerwithUseContext