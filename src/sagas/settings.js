import { takeLatest, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { UPDATE_GENERAL_SETTINGS_SAGA, UPDATE_GENERAL_SETTINGS } from '../actions'

function* updateGeneralSettings({ payload }) {
  toast.success('Saved')
  yield put({ type: UPDATE_GENERAL_SETTINGS, payload })
}

export function* watchUpdateGeneralSettings() {
  yield takeLatest(UPDATE_GENERAL_SETTINGS_SAGA, updateGeneralSettings)
}
