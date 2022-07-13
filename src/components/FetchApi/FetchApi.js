const FetchApi = (query = '', pageNumber = 1) => {
  const API_KEY = '28204087 - b7dfad2f8be6ececce180758b';
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      //return Promise.reject(new Error(`Нет покемона с именем ${search}`));
    })
    .then(pixabay => this.setState({ pixabay, status: 'resolved' }))
    .catch(error => this.setState({ error, status: 'rejected' }));
};

export default FetchApi;
