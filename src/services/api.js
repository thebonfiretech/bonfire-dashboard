import axios from 'axios';



var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: "https://api.thebonfire.tech/v1/", 
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;