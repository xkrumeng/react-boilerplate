import { call, put, takeEvery } from 'redux-saga/effects'

const delay = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, ms)
})

export function * incrementAsync () {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function * watchIncrementAsync () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
