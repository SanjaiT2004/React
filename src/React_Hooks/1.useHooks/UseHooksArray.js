import React, { useState } from 'react'
function UseHooksArray() {
    const [array, setArray] = useState([])
    const [i, setI] = useState(0)
    const addElement = () => {
        //i++;
        setI(prevI => prevI + 1);
        setArray([i,array])
    }
    return (
        <>
            <button onClick={addElement}> print array</button>         
            <p>{array.map((element, index) => (<p key={index}>{ element}</p>))}</p>
        </>
    )
    
}
export default UseHooksArray