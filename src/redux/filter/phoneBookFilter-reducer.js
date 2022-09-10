import { createReducer } from '@reduxjs/toolkit';
import { addFilter } from './phoneBookFilter-actions';

const filterReducer = createReducer('', {
  [addFilter]: (store, { _, payload }) => payload,
});

export default filterReducer;