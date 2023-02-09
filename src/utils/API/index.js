import axios from 'axios';

const Api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    accept: 'application/json'
  },
});

export default Api;