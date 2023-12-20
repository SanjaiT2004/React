import React, { useEffect, useState } from 'react'

function ChangeTitle2() {
    const [count, setCount] = useState(0)
    const[name,setName] = useState('')
    useEffect(() => {
        document.title = `clicked ${count } times `
    },[count])
    // we are using the array as second paramter in the useeffect hook to reduce the re-render of the components
    // to check how it works use console and remove the second parameter in useeffects
  return (
      <div>
          <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
          <button onClick={() => setCount(count + 1)}>If u click me i Will surprice u </button>
    </div>
  )
}

export default ChangeTitle2