import { createReducer } from '@reduxjs/toolkit';
import { addFilter } from './filterActions';

const filterReducer = createReducer('', {
  [addFilter]: (store, { _, payload }) => payload,
});

export default filterReducer;

