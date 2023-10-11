import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// для обычных звпросов

export const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

// для запросов где нужна информация по токену
export const $authAPI = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

$authAPI.interceptors.request.use(config => {
    config.headers.AccessToken = `${localStorage.getItem('UserToken')}`
    return config;
});