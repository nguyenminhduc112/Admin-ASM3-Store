import { createSlice } from '@reduxjs/toolkit';
import { checkAuth, getIsAdmin, getIsAuthentication } from '../../utils/auth';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthentication: checkAuth(),
        isAdmin: getIsAdmin(),
        token: getIsAuthentication()
    },
    reducers: {
        login: (state, action) => {
            state.isAuthentication = true
            state.isAdmin = action.payload.admin
            state.token = action.payload.token
        },
        logout: (state) => {
            state.isAuthentication = false
            state.isAdmin = false
            state.token = null
        },
    },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;