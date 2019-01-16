import { CATCH_MOVEMENT } from '../actions'

const INITIAL_STATE = {
  position: {
    x: 0,
    y: 0,
  },
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CATCH_MOVEMENT:
      return { ...state, position: { ...payload } }
    default:
      return { ...state }
  }
}
