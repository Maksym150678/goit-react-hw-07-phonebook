import { createReducer } from '@reduxjs/toolkit';
import { addContact, delContact } from './phone-book-items-actions';


const itemsReducer = createReducer(
  JSON.parse(localStorage.getItem('phoneList')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (store, { _, payload }) => [payload, ...store],
    [delContact]: (store, { _, payload }) =>
      store.filter(item => item.id !== payload),
  }
);
export default itemsReducer;