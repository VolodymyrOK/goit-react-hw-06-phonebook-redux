import { getListContacts } from './store';

export const contactsReducer = (
  state = { contacts: getListContacts() },
  action
) => {
  switch (action.type) {
    case 'contact/newContact':
      console.log(state.contacts);
      return;
    case 'contact/delContact':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const addContact = newContact => {
  return {
    type: 'contact/newContact',
    payload: newContact,
  };
};

export const delContact = id => {
  return {
    type: 'contact/delContact',
    payload: id,
  };
};
