import React, { useCallback, useState } from 'react'


//useCallback is a React Hook used for optimizing performance by memoizing a function.
//useCallback allows you to wrap a function and memoize it so that it's only recreated when its dependencies change.
//It helps in preventing unnecessary re-renders of components that receive this function as a prop
function UseCallBack() {
    const [count, setCount] = useState(0)
    const increment = useCallback(() => {
        setCount(prevState => prevState + 1);
    },[setCount])
  return (
      <div>
          Count - {count}
          <button onClick={increment}>Click me!</button>
    </div>
  )
}

export default UseCallBack