import axios from 'axios';

var token = localStorage.getItem('token');

const UrlApi = () =>{

  const mode = import.meta.env.VITE_MODE

  console.log(mode)

  return import.meta.env.VITE_API

}

const api = axios.create({
  baseURL: UrlApi(), 
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;