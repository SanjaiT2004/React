import React, { useEffect, useState } from 'react'

function InervalEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const tick = () => {
          {/*setCount(prevState => prevState + 1)*/}
          {/* use only when the array is empty */ }
          setCount(count + 1)
        }
       const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
  {/** If second paramter is empty array it is used to ignore the re renders  */ }
  {/** If you use you must insert which changes should give effect */ }
  {/* If i give the count in it .It will give you effect */ }
  {
    /**Also you can use prevState in the setCount method when the array [] must be empty when u use this condition */
  }
  return (
    <div>{count}</div>
  )
}

export default InervalEffect