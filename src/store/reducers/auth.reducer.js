import { LOGOUT, SIGN_IN } from '@actions/actions'

const initialState = { isAuthenticated: true, user: null, keepConnected: false }

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isLoggedIn: true }
        case LOGOUT:
            return {
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}
