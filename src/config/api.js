import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.1.23:2019/api/v1',
});
