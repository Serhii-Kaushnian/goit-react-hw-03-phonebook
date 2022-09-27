import React, { Component } from 'react';
import { Form, Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { filterChange, filterValue } = this.props;
    return (
      <div>
        <Form>
          <Label>
            Find contact by name
            <Input
              onChange={filterChange}
              type="text"
              name="filter"
              value={filterValue}
            />
          </Label>
        </Form>
      </div>
    );
  }
}
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
