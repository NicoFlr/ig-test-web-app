import axios from 'axios';
import { API_BASE_URL } from '../config/environment';

const httpService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpService;
