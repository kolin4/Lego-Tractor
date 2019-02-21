import React from 'react';
import ReactNipple from 'react-nipple';
import styled from 'styled-components';

const JoyContainer = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    .back {
        background-color: red !important;
    }
    .front {
        background-color:red !important;
    }
`;

class Joystick extends React.Component {
    state = {
      x: 0,
      y: 0,
    }

    /* eslint-disable */
    handleMove = ({ position }) => {
      const x = position.x.toFixed()
      const y = position.y.toFixed()

      const joyPosition = {
        x: x - this.state.x,
        y: -(y - this.state.y),
      }
      this.props.updateMovement(joyPosition)
    }

    /* eslint-enable */

    handleStartPosition = ({ position }) => {
      const x = position.x.toFixed();
      const y = position.y.toFixed();
      this.setState({
        x,
        y,
      });
    }

    render() {
      return (
        <JoyContainer>
          <ReactNipple
            options={{
              mode: 'static',
              position: { top: '50%', left: '50%' },
              size: '100',
            }}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
            onMove={(ev, data) => this.handleMove(data)}
            onStart={(ev, data) => this.handleStartPosition(data)}
            onEnd={(ev, data) => this.handleMove(data)}
          />
        </JoyContainer>
      );
    }
}

export default Joystick;
