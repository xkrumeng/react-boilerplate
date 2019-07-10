import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import incrementReducer from './reducers/index'
import { watchIncrementAsync } from './sagas/index'
import DevTools from './container/DevTools'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument()
)

const store = createStore(incrementReducer, enhancer)

sagaMiddleware.run(watchIncrementAsync)

export default store
