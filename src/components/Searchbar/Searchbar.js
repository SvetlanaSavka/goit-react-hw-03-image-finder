import React from 'react';
//import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
  Container,
  SearchInput,
  ButtonSearch,
  SearchForm,
} from './Searchbar.styled';
//import { SearchInput, Field, Header, Button } from './Searchbar.styled';

/* const Input = styled(Field)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`; */

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ search }, actions) => {
    if (search.trim() === '') {
      toast('Введите название!');
      return;
    }

    onSubmit(search);
    actions.resetForm();
    // this.setState({ search: '' });
  };

  return (
    <Container>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <ButtonSearch type="submit">
            <GoSearch width="20" height="20" fill="grey" />
          </ButtonSearch>

          <SearchInput name="search" />
        </SearchForm>
      </Formik>
    </Container>
  );
};
//<GoSearch width="20" height="20" fill="grey" />;
