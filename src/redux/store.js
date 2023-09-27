import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import data from '../data/data.json';
import { nanoid } from '@reduxjs/toolkit';

export const STORAGE_KEY = 'storage-contacts';

export const getListContacts = () => {
  const storageContacts = localStorage.getItem(STORAGE_KEY);
  return storageContacts !== null && storageContacts.length > 2
    ? JSON.parse(storageContacts)
    : data;
};

const initialState = {
  contacts: getListContacts(),
  filter: '',
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
export const changeFilter = newFilter => {
  return {
    type: 'filter',
    payload: newFilter,
  };
};

const rootReducer = (state = initialState, action) => {
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
    case 'filter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
