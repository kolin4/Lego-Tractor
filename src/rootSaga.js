import { all } from 'redux-saga/effects'
import { watchSwitchMenu, watchSwitchNormalLights, watchSwitchLongLights } from './sagas/aside'
import { watchUpdateGeneralSettings } from './sagas/settings'
import { watchMovements } from './sagas/movements'

export default function* rootSaga() {
  yield all([
    watchSwitchMenu(),
    watchSwitchNormalLights(),
    watchSwitchLongLights(),
    watchUpdateGeneralSettings(),
    watchMovements(),
  ])
}
