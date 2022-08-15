import axios, { AxiosInstance } from 'axios';
import { PROPERTIES } from '../config/properties';

const headers = {
    Authorization: localStorage.getItem('ACCESS_TOKEN') || '',
};

const Auth: AxiosInstance = axios.create({
    baseURL: PROPERTIES.BASE_URL,
    headers: headers,
});

export default Auth;