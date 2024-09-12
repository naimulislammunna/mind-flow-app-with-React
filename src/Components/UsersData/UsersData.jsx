import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const UsersData = ({ item, idx, refatch }) => {
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refatch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
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
                <img src={item?.photo} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300 rounded-full" />
            </td>
            <td className="py-4 px-6 border-b text-lg font-medium">{item?.name}</td>
            <td className="py-4 px-6 border-b text-sm font-medium">{item?.email}</td>
            <td className="py-4 px-6 border-b">
                <Link><button className="button">Make Admin</button></Link>
            </td>
            <td className="py-4 px-6 border-b">
                <button onClick={() => handleDelete(item._id)} className="button my-auto ml-4 cursor-pointer"><MdDelete /></button>
            </td>
        </tr>
    );
};

export default UsersData;