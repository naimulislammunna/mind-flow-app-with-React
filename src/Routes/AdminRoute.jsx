import { useContext} from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Loading from "../Components/Loader/loading";
import useAdmin from "../Hook/useAdmin";

const AdminRoute = ({ children }) => {
    const {userInfo, loading} = useContext(AuthContext);
    const [isAdmin, isPending] = useAdmin();
    if(loading || isPending){
        return <Loading/>
    }
    if(userInfo && isAdmin){
        return children
    }

   
    return 
};

export default AdminRoute;