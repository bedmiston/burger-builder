import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-ebb8f.firebaseio.com/'
});

export default instance;