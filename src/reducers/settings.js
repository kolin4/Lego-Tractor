import { UPDATE_GENERAL_SETTINGS } from '../actions'

const INITIAL_STATE = {
  gearbox: 'auto',
  movements: 'simple',
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_GENERAL_SETTINGS:
      return { ...state, ...payload }
    default:
      return { ...state }
  }
}
