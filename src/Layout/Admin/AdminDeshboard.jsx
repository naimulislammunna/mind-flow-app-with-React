import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminDeshboard = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row">
                <Sidebar></Sidebar>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default AdminDeshboard;