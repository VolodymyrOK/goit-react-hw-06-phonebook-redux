import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  StyledForm,
  StyledField,
  Button,
  ErrorMsg,
  Title,
} from './ContactsEntry.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(
      /\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g,
      'Must contain only numbers or be in the correct format'
    )
    .required('Required'),
});

export const ContactsEntry = ({ onAddContact }) => {
  const contacts = useSelector(state => state.contacts);
  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={({ name, number }, reset) => {
          const isDuplicated = contacts.find(
            item => item.name.toLowerCase() === name.toLowerCase()
          );
          if (isDuplicated) return alert(name + ' is already in contacts');
          onAddContact(name, number);
          reset.resetForm();
        }}
      >
        <StyledForm>
          <Label htmlFor="username">Name</Label>
          <StyledField
            id="username"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="User name"
            required
          />
          <ErrorMsg name="name" component="span"></ErrorMsg>
          <Label htmlFor="usernumber">Number</Label>
          <StyledField
            id="usernumber"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Phone number in the format (123) 456-78-90"
            required
          />
          <ErrorMsg name="number" component="span"></ErrorMsg>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  );
};

ContactsEntry.propTypes = {
  onAddContact: PropTypes.func,
};
