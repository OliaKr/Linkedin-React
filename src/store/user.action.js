import { store } from '../store/store.js'
import { LOG_IN, LOG_OUT } from '../store/user.reducer.js'

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
