import React from 'react';
import FetchApi from 'components/FetchApi/FetchApi';

export class PixabayInfo extends React.Component {
  state = {
    pixabay: null,
    error: null,
    status: 'idel',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.search !== this.props.search) {
      FetchApi('cat', 2).then(res => console.log(res));

      this.setState({ status: 'panding' }); // pixabay: null сбрасываем перед каждым http запросом
    }
  }

  render() {
    const { /* loading, */ pixabay, error, status } = this.state;
    //const { search } = this.props;

    if (status === 'idle') {
      return <div>Введите имя покемона</div>;
    }

    if (status === 'pending') {
      return <div> Загружаем...</div>; //loading: false,
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <div>
          <p>{pixabay.name}</p>
          <img
            src={PixabayInfo.sprites.other['official-artwork'].front_default}
            alt=""
            width="300"
          />
        </div>
      );
    }
  }
}
