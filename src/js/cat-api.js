import { error } from './helpers';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_bpOVhK1o56axbhunFzePPctjisssfwNQobrNIe0OIuqD1TZt6ZzCNF1mHQocvShS';

function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

  return axios
    .get(BASE_URL)
    .then(response => response.data)
    .catch(err => error(err));
}
function fetchCatByBreed(breedId) {
  const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios
    .get(BASE_URL)
    .then(response => {
      console.log(response);
      if (response.data.length === 0) {
        throw error;
      }
      return response.data;
    })
    .catch(err => error(err));
}

export { fetchBreeds, fetchCatByBreed };