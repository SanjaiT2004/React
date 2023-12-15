import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  //   increment() {
  //     this.setState({
  //       count: this.state.count + 1
  //     })
  // }
  increment() {
    this.setState((prevState) => ({
        count : prevState.count +1
    }))
  }
  incrementFive() {/*when u call the function multiple times these are bind together into single 
    to make the app runs fastly in js so we use prevState in above if you call it only once then you use the 10 th line func */ 
    
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  
  }
    render() {
      return (
        < div >
          <>count = { this.state.count}<p></p></>
        <button onClick={() => this.incrementFive()}> Increment </button>
      </div>
    )
  }
}
export default Counter

