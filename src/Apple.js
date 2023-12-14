import React from 'react'
// function Apple() {

//     return (<div style={{"text-align": "center","color" : "red"}}>
//         <h1>APPLE is red color</h1>
//         <Gua></Gua>
//         <Orange></Orange>
//     </div>
        
//     );
// }
// const Gua = () => {// JSX Component
//     return (
//         < div style= {{ "text-align" : "center ", "color": "green" }}>
//             <h1>GUA is Green Color</h1></div>
//     );
// }
// const Orange = () => { // not JSX instead it is created by using react
//     return  React.createElement('h1', {style :{"color":"orange"}}, 'Orange is orange color')
// }
// const player = {
//     Name: "",
//     Country: "",
//     Role: ""
// };
const Greet = props => {
    
    const {id, name, country, role } = props.person;
    console.log(props)
    return (
        <>My name is {name} from  {country} my role is {role}.{id}
            <p></p>
        </>
    );
}
export default Greet;