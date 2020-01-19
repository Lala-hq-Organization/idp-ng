import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`
});

instance.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json'
    }
  };
});

export default instance;
