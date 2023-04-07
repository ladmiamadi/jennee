import { LOGOUT, SIGN_IN } from '@actions/actions'

export const signIn = (data) => {
    return async (dispatch) => {
        dispatch({
            type: SIGN_IN,
            payload: data
        })
    }
}

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT
    })
}
