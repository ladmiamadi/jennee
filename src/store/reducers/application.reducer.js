import { HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER, ACTIVE_ITEM, ACTIVE_LINK } from '@actions/actions'

const initialState = {
    loading: false,
    error: false,
    msg: false,
    openItem: 'events',
    activeLink: ''
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
            return { ...state, openItem: action.payload }
        case ACTIVE_LINK:
            return { ...state, activeLink: action.payload }
        default:
            return state
    }
}
