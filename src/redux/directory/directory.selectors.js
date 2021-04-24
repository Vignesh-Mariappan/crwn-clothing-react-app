import { createSelector } from 'reselect';

// Input selector - it will select the value from the state
export const selectDirectory = state => state.directory;

// Create a new selector to select the sections of the directory reducer
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);

