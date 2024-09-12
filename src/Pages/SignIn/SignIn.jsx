import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogIn from "../../Components/GoogleLogIn/GoogleLogIn";


const SignIn = () => {
    const {handleSignIn} = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();


    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        

        handleSignIn(email, password)
        .then((res) => {
            console.log(res);
            
            toast.success('Sign In Successfully');
            navigate(location.state || '/');
            form.reset();
            
        })
        .catch((err)=> {
            const errMsg = err.message.split('/');
            setError(errMsg[1])
            toast.warn(error)
        }
        )
    }

     
    return (
        <div className="my-5">
            <ToastContainer/>
            <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">
                <h1 className="text-3xl font-semibold text-cyan-600">Sign In</h1>
                
                <form onSubmit={handleSubmit}  className="space-y-6">
                    <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                        <label htmlFor="username_2"  className="block font-medium">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="email"
                            type="email"
                            required
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
                            required
                        />
                    </div>
                    <input type="submit" value='Submit' className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer"/>
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Don&apos;t have an account?
                    <Link to='/register'>
                        <a className="ml-3 font-semibold underline">
                        Register
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

export default SignIn;