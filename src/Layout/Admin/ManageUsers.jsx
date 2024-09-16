import { useQuery } from "react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Loading from "../../Components/Loader/loading";
import UsersData from "../../Components/UsersData/UsersData";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosSecure.get('/users')
            console.log("reso", response);
            return response.data;
        }
    })
    console.log("data", data);
    
    if(isLoading) return <Loading/>

    return (
        <div className="home-container">
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-gray-700 text-white text-center">
                            <th className="py-4 px-6 text-lg text-left border-b"></th>
                            <th className="py-4 px-6 text-lg text-left border-b"></th>
                            <th className="py-4 px-6 text-lg text-left border-b"> Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Email</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Role</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, idx) => <UsersData key={item._id} item={item} idx={idx} ></UsersData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;