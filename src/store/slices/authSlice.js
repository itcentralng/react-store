import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        isLoading:false,
        user: localStorage.getItem('storeUser') ? JSON.parse(localStorage.getItem('storeUser')) : {},
        isLoggedIn: !!localStorage.getItem('storeToken') || false
    },
    
    reducers:{
        setIsLoading(state,action){
            state.isLoading=action.payload;
        },
        checkLogin : (state,action) =>{
            state.user=action.payload;
            state.isLoggedIn=true;
        },
        checkLogout : (state) => {
            state.user={};
            state.isLoggedIn=false;
        }
    }

});

export const checkUserLogin = (loginData) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const response = await axios.post('https://fakestoreapi.com/auth/login',{
            username: loginData.username,
            password: loginData.password,
        });
        dispatch(checkLogin({
            username:loginData.username,
        }));
        localStorage.setItem('storeToken',response.data.token)
        localStorage.setItem('storeUser',JSON.stringify({username:loginData.username}))
        dispatch(setIsLoading(false));

    }   catch (err) {
            throw new Error(err);
    }
};

export const setUserLogout = () => async (dispatch) => {
    try {
        dispatch(checkLogout({
            username: '',
        }));
        localStorage.removeItem('storeToken')
        localStorage.removeItem('storeUser')

    }   catch (err) {
            throw new Error(err);
    }
};
export const { checkLogin,checkLogout,setIsLoading } = authSlice.actions

export default authSlice.reducer;