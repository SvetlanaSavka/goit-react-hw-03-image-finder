import React from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import { PixabayInfo } from 'components/PixabayInfo/PixabayInfo';

export class App extends React.Component {
  state = {
    search: '',
  };

  handleSearchFormSubmit = search => {
    this.setState({ search }); //доходит state с сабмита Searchbar
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <PixabayInfo search={this.state.search} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

/* const BASIC_URL = 'https://pixabay.com/api/';
const URL_KEY = '28204087-b7dfad2f8be6ececce180758b';
const queryString = `q=${this.value}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;

function fetchPokemon(cardId) {
  return fetch(`${BASIC_URL}?key=${URL_KEY}&${queryString}`).then(
    //{cardId}
    response => {
      return response.json();
    }
  );
} */
/* fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=28204087-b7dfad2f8be6ececce180758b&image_type=photo & orientation=horizontal & per_page=12'
    )
      .then(res => res.json())
      .then(pixabay => this.setState({ pixabay }))
      .finally(() => this.setState({ loading: false }));
  } */
