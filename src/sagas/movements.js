import { takeEvery, put } from 'redux-saga/effects'
import io from 'socket.io-client';
import { CATCH_MOVEMENT_SAGA, CATCH_MOVEMENT } from '../actions'

const socket =  io();

function* movements({ payload }) {
  try {
    yield socket.emit('movement',payload)
    yield put({ type: CATCH_MOVEMENT, payload })
  }
  catch(err){
    console.log(err)
  }
}

export function* watchMovements() {
  yield takeEvery(CATCH_MOVEMENT_SAGA, movements)
}
