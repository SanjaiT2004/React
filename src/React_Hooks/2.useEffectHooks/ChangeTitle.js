import React, { useState, useEffect } from "react";
function ChangeTitle() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count}times`
        // whenever we change the count value it will effect the title alsooo
    })
    return (
        <>
            <button onClick={() => setCount(count + 1)}>{ count} times Clicked me!</button></>
    )
}
export default ChangeTitle