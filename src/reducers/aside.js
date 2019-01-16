import { SWITCH_ASIDE, SWITCH_NORMAL_LIGHTS, SWITCH_LONG_LIGHTS } from '../actions'

const INITIAL_STATE = {
  isAside: true,
  normalLights: false,
  longLights: false,
}

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case SWITCH_ASIDE:
      return { ...state, isAside: !state.isAside }
    case SWITCH_NORMAL_LIGHTS:
      return { ...state, normalLights: !state.normalLights }
    case SWITCH_LONG_LIGHTS:
      return { ...state, longLights: !state.longLights }
    default:
      return { ...state }
  }
}
