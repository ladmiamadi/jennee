import { createSelector } from 'reselect'

const _isAuthenticated = (state) => state.applicationReducer.isAuthenticated
const _user = (state) => state.applicationReducer.user
const _keepConnected = (state) => state.applicationReducer.keepConnected
const _token = (state) => state.applicationReducer.token
export const isAuthenticatedSelector = createSelector(_isAuthenticated, (isAuthenticated) => isAuthenticated)
export const userSelector = createSelector(_user, (user) => user)
export const keepConnectedSelector = createSelector(_keepConnected, (keepConnected) => keepConnected)
export const tokenSelector = createSelector(_token, (token) => token)
