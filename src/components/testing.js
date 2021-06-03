import React, {Component } from 'react'

class TestApp extends Component {

  noiceWasClicked () {
    alert('Clicked!!!!!')
  }

  render() {
    return (
      <div>
        <h1 onClick={this.noiceWasClicked}>Big Noice</h1>
      </div>
    )
  }
}

export default TestApp
