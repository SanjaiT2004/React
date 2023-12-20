import React, { useEffect, useState } from 'react'

function MouseMove() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logMousePosition = e => {
        console.log("Mouse is moving") 
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        //console.log("useeffect called") just uncomment it how it reduce re-render and
        // also remove second parameter array 
        window.addEventListener('mousemove', logMousePosition);
        return () =>{
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
  return (
      <div>
          Hooks X - {x}  Y = {y}
    </div>
  )
}

export default MouseMove