import axios from "axios";
// import store from './store';

const instance = axios.create({
  baseURL: ""
});

export default instance;
