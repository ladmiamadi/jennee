import { createSelector } from 'reselect'

/*
const selectTodos = state => state.todos;

const getCompletedTodos = createSelector(
    selectTodos,
    todos => todos.filter(todo => todo.completed)
);*/
const _activeLink = (state) => state.applicationReducer.activeLink
const _openItem = (state) => state.applicationReducer.openItem
export const activeLinkSelector = createSelector(_activeLink, (activeLink) => activeLink)
export const openItemSelector = createSelector(_openItem, (openItem) => openItem)
