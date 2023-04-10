export const TOGGLE_MODAL = 'TOGGLE_MODAL'

const initialState = {
    isOpen: false,
    modalData: [],
    title: "",
}

export function modalDataReducer(state = initialState, action) {
    var newState = state

    switch (action.type) {
        case TOGGLE_MODAL:
            newState = { ...state, isOpen: action.isOpen, modalData: action.modalData, title: action.title }
            break
        default:
            return newState
    }
    return newState
}
