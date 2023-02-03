import axios from 'axios';


const http = axios.create({
  baseURL: 'https://figueiroadvocacia.x10.mx/wp-json/wp/v2'
});



export default http;