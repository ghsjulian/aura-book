export interface User {
    _id: string;
    name: string;
    email: string;
    profileImage: string
    role: string
    isActive: boolean
    createdAt: string
    updatedAt: string
    __v: number
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
    isBooking: boolean
}

export interface AuthResponse {
    user: User;
    token: string;
    success: boolean
    message: string
}
export interface SignupPayload {
    name: string
    email: string;
    password: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload extends LoginPayload {
    name: string;
}

export interface logoutInterface {
    success: boolean
    message: string
    user: User | null
}
export interface forgetPasswordResponse {
    success: boolean
    message: string
}