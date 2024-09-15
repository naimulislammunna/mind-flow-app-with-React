import axios from "axios";
import { useQuery } from "react-query";
import Post from "./Post";
import Loading from "../Loader/loading";

const Posts = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const getData = await axios.get(`${import.meta.env.VITE_SITE_LINK}/post`);
            return getData.data;
        }
    })

    if (isLoading) return <Loading />

    return (
        <div>
            { data?.length > 0 ? <>
                <div>
                    {
                        data?.map(item => <Post key={item._id} item={item}></Post>)
                    }
                </div>

            </>
                : <>
                    <h2 className="text-xl my-10 text-center text-red-500">No Data Here</h2>
                </>}
        </div>
    );
};

export default Posts;