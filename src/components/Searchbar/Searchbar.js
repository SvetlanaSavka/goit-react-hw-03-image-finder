import React from 'react';
import { Formik, Form, Field } from 'formik';

import { toast } from 'react-toastify';

export class Searchbar extends React.Component {
  state = {
    search: '',
  };

  handleNameChange = event => {
    this.setState({ search: event.carrentTarget.value.toLoverCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.search.trim() === '') {
      toast('Введите имя!');
      return;
    }

    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <>
        <Formik
          initialValues={{ title: '', link: '' }}
          onSubmit={el => console.log(el)}
        >
          <Form>
            <button type="submit">Search</button>
            <label>
              <Field name="title" />
            </label>
          </Form>
        </Formik>

        {/*  <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            name="search"
            value={this.state.search}
            onChange={this.handleNameChange}
          />
        </form> */}
      </>
    );
  }
}
