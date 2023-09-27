import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';
import { STORAGE_KEY, addContact, changeFilter, delContact } from 'redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => dispatch(addContact(newContact));

  const delOldContact = idContact => dispatch(delContact(idContact));

  const onFilterElement = newFilter => dispatch(changeFilter(newFilter));

  return (
    <Layout>
      <ContactsEntry onAdd={addNewContact} />

      <ContactsList
        onDelContact={delOldContact}
        onFilterElement={onFilterElement}
      />
      <GlobalStyle />
    </Layout>
  );
};
