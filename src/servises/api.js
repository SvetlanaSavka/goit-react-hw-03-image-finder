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
