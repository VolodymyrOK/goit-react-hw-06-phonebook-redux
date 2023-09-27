import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';
import { STORAGE_KEY } from 'data/StorageData';
import { addContact, delContact } from 'redux/contactsSlice';
import { changeFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.stateContacts.contacts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => dispatch(addContact(newContact));

  const delOldContact = idContact => dispatch(delContact(idContact));

  const onChangeFilter = newFilter => dispatch(changeFilter(newFilter));

  return (
    <Layout>
      <ContactsEntry onAddContact={addNewContact} />

      <ContactsList
        onDelContact={delOldContact}
        onChangeFilter={onChangeFilter}
      />
      <GlobalStyle />
    </Layout>
  );
};
