import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const GoogleLogIn = () => {
    const {googleLogIn} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((res) => {
                const { displayName, email, photoURL } = res.user;

                const user = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                axiosPublic.post('/add-users', user)
                    .then(({ data }) => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                width: "300px",
                                icon: "success",
                                text: "Google LogIn Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    }
                    )
                // navigate(location.state || '/');
            })
            .catch(() => toast.warn('warning'))
    }
    return (
        <div>
            <ToastContainer/>
            <div className="flex justify-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">

                <button onClick={handleGoogleLogIn} aria-label="Log in with Google" className="rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogIn;