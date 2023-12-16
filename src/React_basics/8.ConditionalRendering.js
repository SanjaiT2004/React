import React from 'react'
let flag = false;
function ConditionalRendering() {// We can render the components by using conditional rendering in the index.js
    //four types of conditional rendering
    //1.using if else
    //2.use the variable to store element to be print
    //3. using ternary operator
    //4.use the short circuit operator 
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