import axios from 'axios';
import { API_KEY, BASE_URL } from 'constans/constans';

axios.defaults.baseURL = BASE_URL;

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
