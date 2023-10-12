import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// для обычных звпросов

export const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

// для запросов где нужна информация по токену
export const $authApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

$authApi.interceptors.request.use(config => {
    config.headers.AccessToken = `${localStorage.getItem('UserToken')}`
    return config;
});
