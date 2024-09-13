import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const UsersData = ({ item, idx, refetch }) => {
    const axiosSecure = useAxiosSecure();

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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res);  
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = (item) =>{
        axiosSecure.patch(`/users/admin/${item._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: `${item.name} is Admin Now`,
                    icon: "success"
                });
            }
            
        })
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
                {
                    item?.role === "admin" ? "Admin" :
                    <Link><button onClick={() => handleMakeAdmin(item)} className="button">Make Admin</button></Link>
                }
            </td>
            <td className="py-4 px-6 border-b">
                <button onClick={() => handleDelete(item._id)} className="button my-auto ml-4 cursor-pointer"><MdDelete /></button>
            </td>
        </tr>
    );
};

export default UsersData;