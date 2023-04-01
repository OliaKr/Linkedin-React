export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

const initialState = {
  user: null,
}

export function userReducer(state = initialState, action) {
  var newState = state

  switch (action.type) {
    case LOG_IN:
      newState = { ...state, user: action.user }
      break
    case LOG_OUT:
      newState = { ...state, user: action.user }
      break
    default:
      return newState
  }
  return newState
}
