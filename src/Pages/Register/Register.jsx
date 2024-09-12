
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Auth/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import GoogleLogIn from "../../Components/GoogleLogIn/GoogleLogIn";

const Register = () => {
    const { handleRegister, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();


    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const user = {
            name,
            email,
            photo
        }

        handleRegister(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        axiosPublic.post('/add-users', user)
                            .then(({ data }) => {
                                console.log(data)
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Register Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            }
                            )
                    })
                    .catch(() => toast.warn('update warning'))
                navigate(location?.state || '/');
                form.reset();

            })
            .catch((err) => {
                const errMsg = err.message.split('/');
                setError(errMsg[1])
                toast.warn(error)
            }
            )


    }
    return (
        <div className="my-5">
            <ToastContainer />
            <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">
                <h1 className="text-3xl font-semibold text-cyan-600">Register</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="username_2" className="block font-medium">
                            Name
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="photoUrl" className="block font-medium">
                            Photo URL
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="photoUrl"
                            placeholder="Enter Url"
                            name="photoUrl"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="email" className="block font-medium">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="email"
                            placeholder="Enter username"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <input type="submit" value='Submit' className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer" />
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Don&apos;t have an account?
                    <Link to='/sign-in'>
                        <a className="ml-3 font-semibold underline">
                            Sign In
                        </a>
                    </Link>
                </p>
                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>
                {/* Social icons */}
                <GoogleLogIn></GoogleLogIn>
            </div>
        </div>
    );
};

export default Register;