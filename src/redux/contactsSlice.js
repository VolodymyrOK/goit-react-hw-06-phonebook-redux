import { nanoid } from '@reduxjs/toolkit';
import { getListContacts } from 'data/StorageData';

const initialState = getListContacts();

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];

    case 'contacts/delContact':
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(4),
      name,
      number,
    },
  };
};

export const delContact = idContact => {
  return {
    type: 'contacts/delContact',
    payload: idContact,
  };
};

// ================ Для redux/toolkit==========================

// export const addContact = createAction('contacts/addContact');

// export const delContact = createAction('contacts/delContact');

// export const contactsReducer = createReducer(initialState, builder =>
//   builder
//     .addCase(addContact, (state, action) => {
//       const isDuplicated = state.contacts.find(
//         item => item.name.toLowerCase() === action.payload.name.toLowerCase()
//       );
//       if (isDuplicated)
//         return alert(action.payload.name + ' is already in contacts');
//       return {
//         contacts: [...state.contacts, { id: nanoid(4), ...action.payload }],
//       };
//     })
//     .addCase(delContact, (state, action) => {
//       if (window.confirm('Are you sure?'))
//         return {
//           contacts: state.contacts.filter(({ id }) => id !== action.payload),
//         };
//       return;
//     })
// );
