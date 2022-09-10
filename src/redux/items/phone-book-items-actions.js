import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('phoneBook/addContact', data => {
  return {
    payload: { ...data, id: nanoid() },
  };
});
export const delContact = createAction('phoneBook/delContact');