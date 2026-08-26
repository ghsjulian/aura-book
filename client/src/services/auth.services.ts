import { api } from './../api';
import type { LoginPayload, RegisterPayload, AuthResponse, User } from '../types/auth';

export const loginApi = async (credentials: LoginPayload): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/user-login', credentials);
    return response.data;
};

export const registerApi = async (userData: RegisterPayload): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/user-register', userData);
    return response.data;
};

export const getProfileApi = async (): Promise<User> => {
    const response = await api.get<User>('/auth/me');
    return response.data;
};

export interface logoutInterface {
    success: boolean
    message: string
    user: User | null
}
export const logoutApi = async (): Promise<logoutInterface> => {
    const response = await api.post<logoutInterface>('/auth/user-logout');
    return response.data;
};