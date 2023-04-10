import { store } from '../store/store.js'
import { TOGGLE_MODAL } from '../store/modalData.reducer.js'

export async function toggleModal(isOpen, modalData, title) {
    try {
        store.dispatch({
            type: TOGGLE_MODAL,
            isOpen: isOpen,
            modalData,
            title,
        })
    } catch (err) {
        console.log('cant toggle modal', err)
        throw err
    }
}

