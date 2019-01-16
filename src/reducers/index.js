import { combineReducers } from 'redux'
import aside from './aside'
import settings from './settings'
import movement from './movement'

export default combineReducers({
  aside,
  settings,
  movement,
})
