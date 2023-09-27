import { nanoid } from '@reduxjs/toolkit';
import { getListContacts } from 'data/StorageData';

const initialState = {
  contacts: getListContacts(),
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      const isDuplicated = state.contacts.find(
        item => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (isDuplicated)
        return alert(action.payload.name + ' is already in contacts');
      return {
        ...state,
        contacts: [...state.contacts, { id: nanoid(4), ...action.payload }],
      };
    case 'contacts/delContact': {
      if (window.confirm('Are you sure?'))
        return {
          ...state,
          contacts: state.contacts.filter(({ id }) => id !== action.payload),
        };
      return;
    }
    default:
      return state;
  }
};

export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: newContact,
  };
};
export const delContact = idContact => {
  return {
    type: 'contacts/delContact',
    payload: idContact,
  };
};
