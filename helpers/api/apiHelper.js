import axios from 'axios';
import config from '../../config';

const { HOST, VERSION } = config.api;
const API = HOST + VERSION;

const instance = axios.create({
    baseURL: API
  });

export default instance;