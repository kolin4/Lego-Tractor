import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Joystick from './joystick'
import Full from './full'
import { CATCH_MOVEMENT_SAGA } from '../../actions'

const Container = styled.div`
    display:flex;
    width:100%;
    height:60%;
`

const Steering = styled.div`
    width:33%;
    height:100%;
    border:1px solid black;
`
const Movement = ({ movements, updateMovement }) => (
  <Container>
    <Steering>
      {movements === 'simple' && <Joystick updateMovement={updateMovement} />}
      {movements === 'full' && <Full updateMovement={updateMovement} />}
    </Steering>
  </Container>
)

const mapStateToProps = state => ({
  gearbox: state.settings.gearbox,
  movements: state.settings.movements,
})

const mapDispatchToProps = dispatch => ({
  updateMovement: params => dispatch({ type: CATCH_MOVEMENT_SAGA, payload: params }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Movement)
