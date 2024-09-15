import { useContext } from "react";
import MyPost from "./MyPost";
import { AuthContext } from "../../Auth/AuthProvider";
import Loading from "../../Components/Loader/loading";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "react-query";

const MyPosts = () => {
    const {userInfo} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data, isLoading, refetch}  = useQuery({
        queryKey: ['users-post'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/my-post?email=${userInfo?.email}`)
            console.log(response.data);        
            return response.data;
        }
        
    })
    
    if(isLoading) return <Loading/>
    return (
        <div>
            <div className="home-container">
                <div className="overflow-x-auto">
                    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                        <thead>
                            <tr className="bg-gray-700 text-white text-center">
                                <th className="py-4 px-6 text-lg text-left border-b">No</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Post Title</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Number Of Vote</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Comment</th>
                                <th className="py-4 px-6 text-lg text-left border-b">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, idx) => <MyPost key={item._id} item={item} idx={idx} refetch={refetch} ></MyPost>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;