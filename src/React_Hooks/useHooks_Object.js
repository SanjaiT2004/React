import React, { useState } from 'react'

function UseHooks_Object() {
    const [name , setName] = useState({firstName : '',lastName : ''})
  return ( 
      <div>
          {/* <input type='text' value={name.firstName} onChange={e => setName({firstName: e.target.value})}/>
          <input type='text' value={name.lastName} onChange={e => setName({ lastName: e.target.value })} /> */}
      {/*when we use the above it protects only one field either first name or last name  */}
      <input type='text' value={name.firstName} onChange={ e => setName({...name,firstName:e.target.value})} />
      <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
      {/* using the spread operator we can access both field at a time */}
      <p>{name.firstName}<p></p><>{name.lastName}</></p>
    </div>
  )
}

export default UseHooks_Object