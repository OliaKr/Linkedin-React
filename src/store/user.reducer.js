export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SET_POST_IMG = 'SET_POST_IMG'

const initialState = {
  user: null,
  postImg: "",
  postImgType: "",
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
    case SET_POST_IMG:
      newState = { ...state, postImg: action.postImg, postImgType: action.postImgType }
      break;
    default:
      return newState
  }
  return newState
}
