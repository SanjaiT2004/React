import React from 'react';
import ReactDOM from 'react-dom/client';
// import Counter from './Counter';
//import Greet from './Apple'
//import EventHandler from './EventHandler';
// import EventHandlerFunc from './EventHandlerFunc';
// import EventBinding from './EventBinding';
import ConditionalRendering from './ConditionalRendering';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const players = [{
//   id : "2",
//   name: "VKohli",
//   country: "India",
//   role : "Batter"
// }, {
//   id : "3",
//   name: "M Pathirana",
//   country: "Sri Lanka",
//   role: "Bowler"
// }]
root.render(
  <div>
    {/* {<Greet id="1" name="KL Rahul" country="India" Role="Batter" />} */}
      {/* { players.map(person => {
      return <Greet person ={person} key = {person.id}></Greet>
       })
    } */}
    {/* <Counter></Counter> */}
    {/* <EventHandlerFunc></EventHandlerFunc> */}
    {/* <EventBinding></EventBinding> */}
    <ConditionalRendering></ConditionalRendering>
        </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

