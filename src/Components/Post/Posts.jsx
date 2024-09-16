import { useQuery } from "react-query";
import Post from "./Post";
import Loading from "../Loader/loading";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Posts = () => {
    const { tags } = useContext(AuthContext);
    console.log('taggggg', tags);

    const axiosSecure = useAxiosSecure()
    const { data, isLoading } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const getData = await axiosSecure.get(`/post`);
            return getData.data;
        }
    })
    if (isLoading) return <Loading />
    const searchData = data.filter(d => d.tag === tags);

    return (
        <div>
            {data?.length > 0 ? <>
                <div>
                    {searchData.length ? <>
                        {
                            searchData?.map(item => <Post key={item._id} item={item}></Post>)
                        }
                    </> : <>
                        {
                            data?.map(item => <Post key={item._id} item={item}></Post>)
                        }
                    </>

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