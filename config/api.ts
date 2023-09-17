import axios from 'axios';

export const api = axios.create({
  baseURL: FREE_IMAGE_URL,
  params: {
    key: FREE_IMAGE_KEY,
  },
});
