import { takeEvery, put, call } from 'redux-saga/effects';
import io from 'socket.io-client';
import { CATCH_MOVEMENT_SAGA, CATCH_MOVEMENT } from '../actions';

const socket = io();

const emiter = (payload) => {
  console.log(payload);
  if (payload.x) {
    socket.emit('steering', payload);
  }
  socket.emit('movement', payload);
};

function* movements({ payload }) {
  try {
    yield call(emiter, payload);
    yield put({ type: CATCH_MOVEMENT, payload });
  } catch (err) {
    console.log(err);
  }
}

export function* watchMovements() {
  yield takeEvery(CATCH_MOVEMENT_SAGA, movements);
}
