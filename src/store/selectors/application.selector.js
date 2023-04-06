import { createSelector } from 'reselect'

/*
const selectTodos = state => state.todos;

const getCompletedTodos = createSelector(
    selectTodos,
    todos => todos.filter(todo => todo.completed)
);*/
const _activeLink = (state) => state.applicationReducer.activeLink
export const activeLinkSelector = createSelector(_activeLink, (activeLink) => activeLink)
