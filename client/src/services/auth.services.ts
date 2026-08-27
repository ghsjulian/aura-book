import { api } from "./../api";
import type {
    LoginPayload,
    RegisterPayload,
    AuthResponse,
    User,
    logoutInterface,
    forgetPasswordResponse,
} from "../types/auth";

export const loginApi = async (
    credentials: LoginPayload,
): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(
        "/auth/user-login",
        credentials,
    );
    return response.data;
};

export const registerApi = async (
    userData: RegisterPayload,
): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(
        "/auth/user-register",
        userData,
    );
    return response.data;
};

export const getProfileApi = async (): Promise<User> => {
    const response = await api.get<User>("/auth/me");
    return response.data;
};

export const logoutApi = async (): Promise<logoutInterface> => {
    const response = await api.post<logoutInterface>("/auth/user-logout");
    return response.data;
};


export const forgetPassword = async (email: string): Promise<forgetPasswordResponse> => {
    try {
        const response = await api.post<forgetPasswordResponse>("/auth/forget-password", { email });
        return response.data;
    } catch (error: any) {
        if (error.response?.data) {
            return error.response.data as forgetPasswordResponse;
        }
        return {
            success: false,
            message: error.message || "An unexpected error occurred. Please try again."
        };
    }
};

export const resetNewPass = async (password: string, token: string): Promise<forgetPasswordResponse> => {
    try {
        const response = await api.post<forgetPasswordResponse>("/auth/reset-password", { password, token })
        return response.data
    } catch (error: any) {
        if (error.response.data) {
            return error.response.data as forgetPasswordResponse
        }
        return {
            success: false,
            message: "Something went wrong, try again"
        }
    }
}