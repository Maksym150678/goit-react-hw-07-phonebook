import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addItems,
  deleteContacts,
} from './itemsOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.loading = false;
    },
    [fetchContacts.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [addItems.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [addItems.fulfilled]: (store, { payload }) => {
      store.items.push(payload);
      store.loading = false;
    },
    [addItems.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [deleteContacts.pending]: store => {
      store.loading = false;
      store.error = null;
    },
    [deleteContacts.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(item => item.id !== payload.id);
      store.loading = false;
    },
    [deleteContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;