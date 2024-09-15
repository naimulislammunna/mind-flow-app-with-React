import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MyPost = ({ item, idx, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const vote = item?.upVote - item?.dwonVote;
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/post/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-6">
                {idx + 1}
            </td>
            <td className="py-4 px-4">
                {item?.title}
            </td>
            <td className="py-4 px-6 border-b text-lg font-medium">{vote}</td>
            <td className="py-4 px-6 border-b">
                <Link to={`/post/${item._id}`}><button className="button">Comment</button></Link>
            </td>
            <td className="py-4 px-6 border-b">
                <button onClick={() => handleDelete(item._id)} className="button my-auto ml-4 cursor-pointer"><MdDelete /></button>
            </td>
        </tr>
    );
};

export default MyPost;