import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/constants';

axios.defaults.baseURL = BASE_URL;

export const searchPictures = async (search, page) => {
  try {
    const respons = await axios.get(
      '',
      {
        params: {
          q: search,
          page,
          key: API_KEY,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      }

      // const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

      //axios.get('', { params: { q: search, page, key: API_KEY, image_type: photo, orientation: horizontal, per_page: 12  } });
    );

    return respons.data;
  } catch (error) {
    console.log(error);
  }
};
