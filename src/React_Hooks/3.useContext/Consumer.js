import React, { useContext } from 'react'
import { UserContext,AgeContext } from './ContextProvider'
function Consumer() {
    const user = useContext(UserContext)
    const age = useContext(AgeContext)
    {/**Above two is used for the context hooks */}
  return (
      <div>
          {/* <UserContext.Consumer>
              {
                  user => {
                      return <h1>User { user } is busy .</h1>
                  }
              }
          </UserContext.Consumer> */}
          {/**Above for a single context */}
          <UserContext>
              {
                  user => {
                      return (
                      <AgeContext.Consumer>
                              {
                                  age => {
                                      return <h1>User is {user}, his age is {age}</h1>
                                  }
                          }
                          </AgeContext.Consumer>
                      )
                }
              }
          </UserContext>
          {/** Above one is for two properties */}
          {/**Below is the useContext hook using method */}
          <h1>User is {user}, his age is { age}</h1>
    </div>
  )
}

export default Consumer