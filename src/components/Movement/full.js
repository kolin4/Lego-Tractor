import React from 'react'
/* eslint-disable react/destructuring-assignment */

class Full extends React.Component {
  componentDidMount() {
    window.addEventListener('deviceorientation', (ev) => {
      const { beta } = ev
      const position = {
        x: beta.toFixed(),
      }
      if (beta.toFixed() > 100) {
        position.x = 180 - beta.toFixed()
      } else if (beta.toFixed() < -100) {
        position.x = Number(-180 - Number(beta.toFixed()))
      }

      this.props.updateMovement(position)
    })
  }

  render() {
    return <p>Switch to phone</p>
  }
}

export default Full
