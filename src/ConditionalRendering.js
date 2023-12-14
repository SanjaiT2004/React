import React from 'react'
let flag = true;
function ConditionalRendering() {
    if (flag) {
        return (
            <><p> You are Welcome</p></>
        )
    } else {
        return (
            <>You can go now</>
        )
    }
}
export default ConditionalRendering