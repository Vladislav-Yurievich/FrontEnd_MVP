
import axios from "axios";

export const setToken = (AccessToken) => {
    localStorage.setItem('UserToken', AccessToken)
}

export const fetchToken = (AccessToken) => {
    return localStorage.getItem('UserToken', AccessToken);
}

export const deleteToken = (AccessToken) => {
    localStorage.removeItem('UserToken', AccessToken);
}

export const fetchUserInfo = async () => {
    const token = fetchToken();
    if (token) {
        try {
            const response = await axios.get('http://localhost:8000/me', {
                headers: {
                    AccessToken: `${token}`,
                    'Content-type': 'application/json',
                },
            });
            return {
                first_name: response.data.first_name,
                last_name: response.data.last_name,
                middle_name: response.data.middle_name,
                group: response.data.group,
                email: response.data.email,
                role: response.data.role,

            };
        } catch (error) {
            console.error('Ошибка при получении информации о пользователе', error);
            throw error;
        }
    }
};