import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, User } from '../../types/auth';

// 1. Initial State
const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('aura-token'),
    isLoading: false,
    error: null,
    isBooking: false
};

// 2. Auth Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state: any, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
            state.error = null;
        },
        loginSuccess: (state: any, action: PayloadAction<{ user: User; token: string }>) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('aura-token', action.payload.token);
        },
        loginFailure: (state: any, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state: any) => {
            console.log(localStorage.removeItem('aura-token'))
            localStorage.removeItem('aura-token');
            state.user = null;
            state.token = null;
            state.error = null;

        },
        clearError: (state: any) => {
            state.error = null;
        },
        setBooking: (state: any) => {
            state.isBooking = !state.isBooking
        }
    },
});

// Export automatic action creators
export const { setLoading, loginSuccess, loginFailure, logout, clearError, setBooking } = authSlice.actions;

// Export main reducer
export default authSlice.reducer;