import { takeEvery, put } from 'redux-saga/effects'
import { CATCH_MOVEMENT_SAGA, CATCH_MOVEMENT } from '../actions'

function* movements({ payload }) {
  yield put({ type: CATCH_MOVEMENT, payload })
}

export function* watchMovements() {
  yield takeEvery(CATCH_MOVEMENT_SAGA, movements)
}
