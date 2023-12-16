import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : ""
        }
        this.Clicked = this.Clicked.bind(this) // approach 3 it is efficient it is documentation way
    }
    Clicked() {
        this.setState({
            message : "You have clicked"
        })
    }
    // Clicked = () => {//approach 4 
    //      this.setState({
    //         message : "You have clicked"
    //     })
    // }
  render() {
    return (
        <div>
            <p>{this.state.message }</p>
            {/* <button onClick={this.Clicked.bind(this)}>Click me!</button>*/}
            {/*approach1*/  /* */}
            {/* <button onClick={() => this.Clicked()}> Click me!</button>*/} 
            {/*approach2  using the arrow func in click event*/
        } 
            <button onClick={this.Clicked}>Click me!</button>
            {/* Approach 3*/}
            {/* {<button onClick={this.Clicked}>Click me!</button>} */}
            {/*Approach 4*/}

      </div>
    )
  }
}

export default EventBinding
