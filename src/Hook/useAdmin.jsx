import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useAdmin = () => {
    const { userInfo } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending} = useQuery({
        queryKey: [userInfo?.email, 'admin'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/admin/${userInfo.email}`)
            console.log(response.data);
            return response.data?.admin;
        }
    })
    return [isAdmin, isPending]
};

export default useAdmin;