import React from 'react';
import ReactDOM from 'react-dom/client';
// import Counter from './4.Counter';
//import Greet from './1.Apple'
//import EventHandler from './6.EventHandler';
// import EventHandlerFunc from './7.EventHandlerFunc';
// import EventBinding from './5.EventBinding';
// import ConditionalRendering from './8.ConditionalRendering';
// import Greet from './3.Greet';
// import players from './3.Greet'
// import Player from './3.Greet'
// import Styling from './9.Styling';
// import Inline from './11.Inline';
// import Counter from './React_Hooks/1.useHooks/Counter';
// import Counter2 from './React_Hooks/Counter2';
import UseHooks_Object from './React_Hooks/useHooks_Object';
import UseHooksArray from './React_Hooks/UseHooksArray';
//import useHooks_Object from './React_Hooks/useHooks_Object';
const root = ReactDOM.createRoot(document.getElementById('root'));
document.title="hello"// we can change the title name by this method
root.render(
  <div>
    {/* {<Greet id="1" name="KL Rahul" country="India" Role="Batter" />} */}
      {/* { players.map(person => {
      return <Greet person ={person} key = {person.id}></Greet>
       })
    } */}

    {/* <Player></Player> */}
    {/* <Counter></Counter> */}
    {/* <EventHandlerFunc></EventHandlerFunc> */}
    {/* <EventBinding></EventBinding> */}
    {/* <ConditionalRendering> </ConditionalRendering> */}
    {/* <Styling cancolor={true}></Styling> */}
    {/* <Inline></Inline> */}
    {/* <Counter2></Counter2> */}
    {/* <UseHooks_Object></UseHooks_Object> */}
    <UseHooksArray></UseHooksArray>
        </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

