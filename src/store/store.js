import { userReducer } from './user.reducer.js'
import { modalDataReducer } from './modalData.reducer.js'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
  userModule: userReducer,
  modalModule: modalDataReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : undefined
export const store = createStore(rootReducer, middleware)

store.subscribe(() => {
  // console.log('**** Store state changed: ****')
  // console.log('storeState:\n', store.getState())
  // console.log('*******************************')
})
