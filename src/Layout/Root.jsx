import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";

const Root = () => {
    return (
        <>
            <Navber/>
            <Outlet/>
        </>
    );
};

export default Root;