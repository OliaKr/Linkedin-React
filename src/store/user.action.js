import { store } from '../store/store.js'
import { LOG_IN, LOG_OUT, SET_POST_IMG } from '../store/user.reducer.js'

export async function login(user) {
  try {
    store.dispatch({
      type: LOG_IN,
      user: user,
    })
  } catch (err) {
    console.log('cant login user', err)
    throw err
  }
}

export async function logout() {
  try {
    store.dispatch({
      type: LOG_OUT,
      user: null,
    })
  } catch (err) {
    console.log('cant logout user', err)
    throw err
  }
}

export async function setPostImg(postImg, type) {
  try {
    store.dispatch({
      type: SET_POST_IMG,
      postImg: postImg,
      postImgType: type,
    })
  } catch (err) {
    console.log('cant set post img', err)
    throw err
  }
}
