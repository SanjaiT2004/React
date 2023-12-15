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
export function Greet(props) {
    const {name , country , role } = props.person
  return (
    <div>
          <p>I am {name}.I am from {country} . I am a {role }.</p>
    </div>
  )

}
export default function Player() {
   return ( players.map((person) => {
    
          return <Greet person = {person} key = {person.id}></Greet>
   })
   )
}
   
//  export default {Greet,Player}
