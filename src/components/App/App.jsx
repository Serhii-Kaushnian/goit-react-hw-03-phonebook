import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AppWrapper, Wrapper } from './App.styled';
export default class App extends Component {
  LOCAL_STORAGE_KEY = 'contactList';
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        this.LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }
  componentDidMount() {
    const localContacnts = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    const parcedLocalContacts = JSON.parse(localContacnts);
    if (parcedLocalContacts) {
      this.setState({
        contacts: parcedLocalContacts,
      });
    }
  }

  isContactlreadyExist = ({ name }) => {
    const { contacts } = this.state;
    const result = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return !result;
  };

  deleteContact = e => {
    const id = e.currentTarget.id;
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    return this.setState({
      contacts: newContacts,
    });
  };
  contactFormHadler = data => {
    if (this.isContactlreadyExist(data)) {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, data],
        };
      });
    } else {
      Notify.info(`Contact ${data.name} is already in Your Phonebook`);
    }
  };
  handleFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const formatedNames = filter.toLowerCase().trim();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(formatedNames);
    });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <AppWrapper>
        <Wrapper>
          <ContactForm
            title="Phonebook"
            onFormSubmit={this.contactFormHadler}
          ></ContactForm>
          <Filter
            filterChange={this.handleFilter}
            filterValue={filter}
          ></Filter>
        </Wrapper>
        <ContactList
          title="Contacts"
          onContactDelete={this.deleteContact}
          contactsList={filteredContacts}
        ></ContactList>
      </AppWrapper>
    );
  }
}
