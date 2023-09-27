import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Filter } from 'components/Filter/Filter';
import {
  ContactList,
  ContactListItem,
  DelButton,
  HeadContacts,
  MessageAboutEmpty,
  Title,
} from './ContactsList.styled';

export const ContactsList = ({ onDelContact, onChangeFilter }) => {
  const visibleContacts = useSelector(state => state.stateContacts.contacts);
  const filter = useSelector(state => state.stateFilter.filter);

  const contacts = visibleContacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <HeadContacts>
        <Title>Contacts</Title>
        <Filter onChangeFilter={onChangeFilter} />
      </HeadContacts>
      <ContactList>
        {contacts.length === 0 ? (
          <MessageAboutEmpty>No entries to display</MessageAboutEmpty>
        ) : (
          contacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
              <span>{name}:</span>
              <span>{number}</span>
              <span>
                <DelButton type="button" onClick={() => onDelContact(id)}>
                  Delete
                </DelButton>
              </span>
            </ContactListItem>
          ))
        )}
      </ContactList>
    </>
  );
};

ContactsList.propTypes = {
  onChangeFilter: PropTypes.func,
  onDelContact: PropTypes.func,
};
