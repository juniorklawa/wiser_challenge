import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/98bd6150-0741-447b-8791-498f69233d35',
});

export default api;
