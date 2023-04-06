import { HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER, ACTIVE_ITEM, ACTIVE_LINK } from './actions'

export const showLoader = () => (dispatch) => {
    dispatch({
        type: SHOW_LOADER
    })
}
export const hideLoader = () => (dispatch) => {
    dispatch({
        type: HIDE_LOADER
    })
}
export const showError = (data) => (dispatch) => {
    dispatch({
        type: SHOW_ERROR,
        payload: data
    })
}
export const hideError = () => (dispatch) => {
    dispatch({
        type: HIDE_ERROR
    })
}

export const activeItem = (data) => (dispatch) => {
    dispatch({
        type: ACTIVE_ITEM,
        payload: data
    })
}
export const activeLink = (data) => (dispatch) => {
    console.log('activeLink zation', data)
    dispatch({
        type: ACTIVE_LINK,
        payload: data
    })
}
