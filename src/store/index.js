import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEffects, getTypeToSagaMap } from '@zup-next/redux-resource'

import resources from './resources'
import cacheManager from './cache'
import { mapValues } from 'lodash'

const devMode = true

const reducers = combineReducers(mapValues(resources, 'reducer'))

export const rootSaga = function* run() {
  yield createEffects(getTypeToSagaMap(mapValues(resources, 'sagas')))
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [cacheManager.getMiddleware(), sagaMiddleware]

const withReduxDevTools = devMode
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares)


const store = createStore(reducers, withReduxDevTools)

sagaMiddleware.run(rootSaga)

export default store
