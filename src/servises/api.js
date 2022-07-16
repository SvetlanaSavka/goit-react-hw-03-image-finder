import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '28204087-b7dfad2f8be6ececce180758b';

export const searchPictures = async (search, page) => {
  try {
    const respons = await axios.get(
      `?q=${search}&page=${page}1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return respons.data;
  } catch (error) {
    console.log(error);
  }
};

// searchPictures('cat', 3)
//   .then(res => res)
//   .catch(err => err);

/* const FetchApi = (search = '', page = 1) => {
  const API_KEY = '28204087-b7dfad2f8be6ececce180758b';
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};

export default FetchApi; */
