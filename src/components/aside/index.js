import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { SWITCH_ASIDE_SAGA, SWITCH_NORMAL_LIGHTS_SAGA, SWITCH_LONG_LIGHTS_SAGA } from '../../actions'
import { NormalLights } from './Lights/normalLights'
import { LongLights } from './Lights/longLights'

const Container = styled.div`
    border:1px solid black;
    border-radius: 3px 0 0 3px;
    width:10%;
    height:100%;
    display:flex;
    flex-direction:column;
    position:fixed;
    right:${({ isAside }) => (isAside ? '0' : '-10%')};
    transition:0.3s;
    display: flex;
    flex-direction: column;
    
`
const AssideOpener = styled.div`
    position: absolute;
    top: 5%;
    left:-20px;
    width:20px;
    height: 40px;
    border: 1px solid black;
    border-radius: 3px 0 0 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ItemBox = styled.div`
    height:40px;
    border-bottom:1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
`
const Aside = ({
  isAside, switchMenu, switchNormalLights, isNormalLights, switchLongLights, isLongLights,
}) => (
  <Container isAside={isAside}>
    <AssideOpener onClick={switchMenu}> ||| </AssideOpener>
    <ItemBox onClick={switchNormalLights}>
      <NormalLights
        isLight={isNormalLights}
      />
    </ItemBox>
    <ItemBox onClick={switchLongLights}>
      <LongLights
        isLight={isLongLights}
      />
    </ItemBox>
  </Container>
)

const mapStateToProps = state => ({
  isAside: state.aside.isAside,
  isNormalLights: state.aside.normalLights,
  isLongLights: state.aside.longLights,
})

const mapDispatchToProps = dispatch => ({
  switchMenu: () => dispatch({ type: SWITCH_ASIDE_SAGA }),
  switchNormalLights: () => dispatch({ type: SWITCH_NORMAL_LIGHTS_SAGA }),
  switchLongLights: () => dispatch({ type: SWITCH_LONG_LIGHTS_SAGA }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Aside)
