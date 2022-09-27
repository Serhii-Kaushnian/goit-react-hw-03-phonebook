import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  ContactsWrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './ContactForm.styled';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onContactFormInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
      id: shortid.generate(),
    });
  };
  addContact = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.formReset();
  };
  formReset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };
  render() {
    const { title } = this.props;
    const { name, number } = this.state;

    return (
      <ContactsWrapper>
        <Title>{title}</Title>
        <Form onSubmit={this.addContact}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.onContactFormInputChange}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.onContactFormInputChange}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </ContactsWrapper>
    );
  }
}
ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
