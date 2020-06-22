import React, { Component } from 'react'
import App from './App.js'

export default class Toggle extends Component {
    state = {
        on: false, 
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

  render () {
    return (
      <div>
      {this.state.on && <p>{bookDetail.detailedDescription}</p>}
      <button onClick={this.toggle}>Show More</button>
      </div>
    )
  } 
}
