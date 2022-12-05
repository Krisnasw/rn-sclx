import axios from 'axios';

let api = axios.create({
    baseURL: 'https://my.smartsistant.id/api/m/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    },
    data: {},
});

export const setClientToken = token => {
    api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
};

export default api;
