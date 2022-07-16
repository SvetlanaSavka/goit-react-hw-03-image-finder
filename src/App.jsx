import React from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { searchPictures } from 'servises/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { AppContainer } from 'App.styled';

export class App extends React.Component {
  state = {
    search: '',
    page: 1,
    error: null,
    pictures: [],
    showModal: false,
    activeImage: null,
    isLoading: false,
  };

  //Если изменилось search или page мы можем делать HTTP запрос

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.page !== page || prevState.search !== search) {
      this.setState({ isLoading: true }); // pixabay: null сбрасываем перед каждым http запросом
      searchPictures(search, page)
        .then(res => {
          console.log(res.hits);
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...res.hits],
          }));
          this.setState({ isLoading: false });
        })
        .catch(error => this.setState({ error }));
    }
  }
  //.then(pokemon => this.setState({pokemon, statrus:'resolved'}))
  //.catch(error => this.setState({error, status: 'rejected'}))
  //если сделаем +1 наш componentDidUpdate обновится снова, пойдет запрос на loadMore onClick={onClick}
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = event => {
    // event.preventDefault();
    this.setState({
      page: 1,
      search: event.target.elements.search.value, //берем знач.инпута
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
    this.setState({ search }); //доходит state с сабмита Searchbar
  };
  render() {
    // const { loading, pixabay, error } = this.state;
    const { pictures, isLoading, activeImage } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery images={pictures} setActiveImage={this.setActiveImage} />
        <ToastContainer autoClose={3000} />
        <Button onClick={this.loadMore} />

        {isLoading && <Loader />}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} activeImage={activeImage} />
        )}
        {/* if(status === 'idel'){
          return <div>Введите название </div>
        }
      if(status === 'pending'){
          return <div>Загружаем...</div>
        }
       if(status === 'rejected'){
          return <h1>{ error.message}</h1>
        }
      if(status === 'resolved'){
          return <p>{searchPictures(search, page)}</p>
        <img src={image.webformatURL} alt={image.tags} />
        } */}
        {/* <>
          {error && <h1> {error.message}</h1>}
          {loading && <div>Загружаем...</div>}
          {pixabay && <div>{pixabay.page}</div>}
          {this.props.search && <div>Введите имя пакемона</div>}
           Достучались к картинке 
          <p>{pixabay.name}</p>
          <img
            //src={sprites.other['official-artwork'].front_default}
            alt=""
            width="300"
          />
        </> */}
      </AppContainer>
    );
  }
}

// 1 formik - при сабмите передается query в стейт App
// 2 axios - try catch
// 3 componentDidUpdat - делаем запрос на бекенд
// 4 меняем state - результат запроса сеттим в this.state.pictures
// 5 render Gallery - передаем в компонент GalleryImages массив из стейта
