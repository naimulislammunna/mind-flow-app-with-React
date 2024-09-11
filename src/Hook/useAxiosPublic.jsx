import axios from "axios";

const createAxios = axios.create({
    baseURL: 'http://localhost:7000'
})

const useAxiosPublic = () => {
    return createAxios;
};

export default useAxiosPublic;