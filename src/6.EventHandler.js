import React, { Component } from 'react'

class EventHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message : ""
        }
    }
    Clicked = ()=> {
        this.setState({
            message : "You have clicked"
         })
        console.log("Clicked me!")
    }
  render() {
    return (
        <div>
            <>{this.state.message}</>
            <p></p>
        <button onClick = {this.Clicked}>Click me</button>
      </div>
    )
  }
}

export default EventHandler
