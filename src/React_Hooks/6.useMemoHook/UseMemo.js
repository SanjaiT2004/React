import React, { useState,useMemo } from 'react'
{/**
The useMemo hook in React is used to memoize expensive calculations and computations, 
optimizing performance by caching the result and only recalculating when the dependencies change. 
This hook is similar to useCallback, but instead of memoizing functions, it memoizes the result of a function. */}

function UseMemo() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const increment1 = () => {
        setCount1(count1 + 1)
    }
    const increment2 = () => {
        setCount2(count2 + 1)
    }
    const isEven = useMemo(() => {
        let i = 0; 
        while (i < 200000000) i++;
        return count1 % 2 ==0
    },[count1])
  return (
      <div>
          <button onClick={increment1}>cnt1 {count1}</button>
          <p></p>
          <span>{isEven ? 'Even' : 'Odd'}</span>
          {/**whenever the count1 changes look the time delay in browser */}
          {/**if you don't use usememo hook  then both cnt changes lately  */}
          <p></p>
          <button onClick={increment2}>cnt2 { count2}</button>
    </div>
  )
}

export default UseMemo