import React from 'react';
import { GoSearch } from 'react-icons/go';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  SearchInput,
  ButtonSearch,
  SearchForm,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ search }, actions) => {
    if (search.trim() === '') {
      toast('Введите название!');
      return;
    }

    onSubmit(search);
    actions.resetForm();
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
