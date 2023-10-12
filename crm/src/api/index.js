import axios from "axios";

<<<<<<< HEAD
const API_URL = process.env.REACT_APP_API_URL;

// для обычных звпросов

=======

const API_URL = process.env.REACT_APP_API_URL;

// для обычных запросов
>>>>>>> 5ed249ed0be0e0cb5998923341a3383b28eb8aef
export const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

<<<<<<< HEAD
// для запросов где нужна информация по токену
export const $authAPI = axios.create({
=======
// для запросов где нужна антификация по токену 
export const $authApi = axios.create({
>>>>>>> 5ed249ed0be0e0cb5998923341a3383b28eb8aef
    baseURL: API_URL,
    withCredentials: true,
});

<<<<<<< HEAD
$authAPI.interceptors.request.use(config => {
    config.headers.AccessToken = `${localStorage.getItem('UserToken')}`
    return config;
});
=======
$authApi.interceptors.request.use(config => {
    config.headers.AccessToken = `${localStorage.getItem('UserToken')}`
    return config;
});

>>>>>>> 5ed249ed0be0e0cb5998923341a3383b28eb8aef
