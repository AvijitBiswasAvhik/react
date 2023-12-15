import React from "react";
import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) =>{
    if(localStorage.getItem('TOKEN')){
        config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`;
    }
    
    return config;
});

axiosClient.interceptors.response.use(
    (response) =>{
        return response;
    },
    (error) =>{
        if(error.response && error.response.staus === 401){
            return error;
        }
        throw error;
    }
    
);
export default axiosClient;