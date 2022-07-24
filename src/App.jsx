import React from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { searchPictures } from 'servises/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Container } from 'components/Container/Container.styled';

export class App extends React.Component {
  state = {
    search: '',
    page: 1,
    error: null,
    pictures: [],
    showModal: false,
    activeImage: null,
    isLoading: false,
    totalPages: null,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.page !== page || prevState.search !== search) {
      this.setState({ isLoading: true });
      searchPictures(search, page)
        .then(res => {
          this.setState({ totalPages: Math.ceil(res.total / 12) });
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...res.hits],
          }));
          this.setState({ isLoading: false });
        })
        .catch(error => this.setState({ error }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = event => {
    this.setState({
      page: 1,
      search: event.target.elements.search.value,
      pictures: [],
    });
    event.target.reset();
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  setActiveImage = imageUrl => {
    this.setState({ activeImage: imageUrl });
  };

  handleSearchFormSubmit = search => {
    this.setState({ search });
  };
  render() {
    const { pictures, isLoading, activeImage, page, totalPages } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery
          images={pictures}
          setActiveImage={this.setActiveImage}
          onClickImage={this.toggleModal}
        />
        <ToastContainer autoClose={3000} />

        {isLoading && <Loader />}

        {pictures.length >= 12 && page < totalPages && (
          <Button onClick={this.loadMore} />
        )}

        {this.state.showModal && (
          <Modal onClose={this.toggleModal} activeImage={activeImage} />
        )}
      </Container>
    );
  }
}
