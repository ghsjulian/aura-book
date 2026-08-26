import axios from 'axios';

export const api = axios.create({
    baseURL: `${import.meta.env.VITE_API}/api/v1`,
    withCredentials: true
});

// Auto-attach token from localStorage to every request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('aura-token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});