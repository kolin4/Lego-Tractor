import { takeLatest, put } from 'redux-saga/effects'
import {
  SWITCH_ASIDE_SAGA,
  SWITCH_ASIDE,
  SWITCH_NORMAL_LIGHTS_SAGA,
  SWITCH_NORMAL_LIGHTS,
  SWITCH_LONG_LIGHTS_SAGA,
  SWITCH_LONG_LIGHTS,
} from '../actions'

function* switchMenu() {
  yield put({ type: SWITCH_ASIDE })
}

export function* watchSwitchMenu() {
  yield takeLatest(SWITCH_ASIDE_SAGA, switchMenu)
}

function* switchNormalLights() {
  yield put({ type: SWITCH_NORMAL_LIGHTS })
}

export function* watchSwitchNormalLights() {
  yield takeLatest(SWITCH_NORMAL_LIGHTS_SAGA, switchNormalLights)
}

function* switchLongLights() {
  yield put({ type: SWITCH_LONG_LIGHTS })
}

export function* watchSwitchLongLights() {
  yield takeLatest(SWITCH_LONG_LIGHTS_SAGA, switchLongLights)
}
