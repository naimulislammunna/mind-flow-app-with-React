import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import MyProfile from "../Pages/Dashboard/MyProfile";
import AddPost from "../Pages/Dashboard/AddPost";
import MyPosts from "../Pages/Dashboard/MyPosts";
import AdminDeshboard from "../Layout/Admin/AdminDeshboard";
import AdminProfile from "../Layout/Admin/AdminProfile";
import Activities from "../Layout/Admin/Activities";
import ManageUsers from "../Layout/Admin/ManageUsers";
import Announcement from "../Layout/Admin/Announcement";
import PostDetails from "../Components/Post/PostDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/post/:id',
                element: <PostDetails></PostDetails>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true,
                element: <MyProfile></MyProfile>
            },
            {
                path: 'add-post',
                element: <AddPost></AddPost>
            },
            {
                path: 'my-posts',
                element: <MyPosts></MyPosts>
            }
        ]
    },
    {
        path: '/admin-dashboard',
        element: <AdminDeshboard></AdminDeshboard>,
        children: [
            {
                index: true,
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'activities',
                element: <Activities></Activities>
            },
            {
                path: 'announcement',
                element: <Announcement></Announcement>
            }
        ]
    }
])

