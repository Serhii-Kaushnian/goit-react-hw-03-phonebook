import React, { Component } from 'react';
import {
  ContactsListWrapper,
  Title,
  List,
  ItemContainer,
  Item,
  Button,
  ItemContainerSpan,
} from './ContactList.styled';
import PropTypes from 'prop-types';

import { FaRegSadCry } from 'react-icons/fa';
export default class ContactList extends Component {
  render() {
    const { title, contactsList, onContactDelete } = this.props;
    return (
      <ContactsListWrapper>
        <Title>{title}</Title>
        {contactsList.length !== 0 ? (
          <List>
            {contactsList.map(value => {
              return (
                <Item key={value.id}>
                  <ItemContainer>
                    {value.name} :
                    <ItemContainerSpan>{value.number}</ItemContainerSpan>
                    <Button
                      onClick={onContactDelete}
                      id={value.id}
                      type="button"
                    >
                      Delete contact
                    </Button>
                  </ItemContainer>
                </Item>
              );
            })}
          </List>
        ) : (
          <>
            <h3>
              Contact list is empty <FaRegSadCry />
            </h3>
          </>
        )}
      </ContactsListWrapper>
    );
  }
}
ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  allContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};
