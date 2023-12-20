import React from 'react'
import Intermediator1 from './Intermediator1';
export const UserContext = React.createContext();
export const AgeContext = React.createContext();
function ContextProvider() {
  return (
      <div>
          {/* <UserContext.Provider value='Sanjai'>
              <Intermediator1 />
          </UserContext.Provider> */}
              {/**props which means value pass through the components (Intermediators 1 and 2) */}
          {/**example for single context */}
          <UserContext.Provider value='Sanjai'>
              <AgeContext.Provider value = '19!'>
                  <Intermediator1/>
              </AgeContext.Provider>
          </UserContext.Provider>

    </div>
  )
}

export default ContextProvider