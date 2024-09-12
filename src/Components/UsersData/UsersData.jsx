import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const UsersData = ({ item }) => {
    return (
        <tr className="hover:bg-gray-50 border-b transition duration-300">
            <td className="py-4 px-4 flex justify-start">
                <img src={item?.photo} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300 rounded-full" />
            </td>
            <td className="py-4 px-6 border-b text-lg font-medium">{item?.name}</td>
            <td className="py-4 px-6 border-b text-sm font-medium">{item?.email}</td>
            <td className="py-4 px-6 border-b">
                <Link><button className="button">Make Admin</button></Link>
            </td>
            <td className="py-4 px-6 border-b">
                <button className="button my-auto ml-4 cursor-pointer"><MdDelete /></button>
            </td>
        </tr>
    );
};

export default UsersData;