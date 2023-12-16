import React from 'react'
const players = [{
  id : "2",
  name: "VKohli",
  country: "India",
  role : "Batter"
}, {
  id : "3",
  name: "M Pathirana",
  country: "Sri Lanka",
  role: "Bowler"
  }]
// let list = players.map(person => (//list rendering
//   <h2>{person.name} .{person.country} .{ person.role}</h2>
// ));
export function Greet(props) {
    const {name , country , role } = props.person
  return (
    <div>
          <p>I am {name}.I am from {country} . I am a {role }.</p>
    </div>
  )

}
export default function Player() {
   return ( players.map((person) => {//used for the props method
    
          return <Greet person = {person} key = {person.id}></Greet>
   })
   )
  //return(<>{ list}</>)// it is used for list rendering 
}
   
//  export default {Greet,Player}
