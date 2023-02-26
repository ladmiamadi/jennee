import { HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER, ACTIVE_ITEM } from '@actions/actions'

const initialState = {
    loading: false,
    error: false,
    msg: false,
    openItem: ['dashboard']
}

export default function applicationReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true }
        case HIDE_LOADER:
            return { ...state, loading: false, msg: false }
        case SHOW_ERROR:
            return { ...state, error: true, msg: action.payload }
        case HIDE_ERROR:
            return { ...state, error: false, msg: false }
        case ACTIVE_ITEM:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
