// store/user.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.model';

// Create a feature selector for the 'users' slice of the state
export const selectUserState = createFeatureSelector<UserState>('users');

// Selector to get the list of users
export const selectUsers = createSelector(selectUserState, (state: UserState) => {
    return state.users;
});

// Selector to get the loading status
export const selectLoading = createSelector(selectUserState, (state: UserState) => state.loading);

// Selector to get any error messages
export const selectError = createSelector(selectUserState, (state: UserState) => state.error);
