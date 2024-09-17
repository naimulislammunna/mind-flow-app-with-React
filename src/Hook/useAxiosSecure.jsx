import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const createAxios = axios.create({
    baseURL: 'https://mindflow-server.vercel.app/'
})

const useAxiosSecure = () => {
    // const {logOut} = useContext(AuthContext);
    // const navigate = useNavigate();
    
    // // Request
    // createAxios.interceptors.request.use((config) => {
    //     const token = localStorage.getItem('access-token')
    //     config.headers.authorization = `Bearer ${token}`
    //     return config
    // }, (error) => {
    //     return Promise.reject(error)
    // })

    // // Response
    // axios.interceptors.response.use(function (response) {
    //     return response;

    //   }, async (error) => {
    //     const status = error.response.status;
    //     console.log("status interceptor", status);
        
    //     if (status === 401 || status === 403) {
    //        await logOut();
    //        navigate('/sign-in')
    //     } 
    //     return Promise.reject(error);
    //   });

    return createAxios;
};

export default useAxiosSecure;