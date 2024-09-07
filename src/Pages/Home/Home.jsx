import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Select from 'react-select'
import Banner from "../../Components/Banner/Banner";
import Post from "../../Components/Post/Post";

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// const MyComponent = () => (
//   <Select options={options} />
// )


const Home = () => {
//     const { userInfo } = useContext(AuthContext);
//     const { displayName, photoURL } = userInfo;
//     const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <Banner></Banner>
            <Post></Post>
        </div>
        // <div className="mx-auto flex w-72 items-center justify-center">
        //     <button onClick={() => setOpenModal(true)} className="rounded-md bg-gray-700 py-2 px-5 text-white">
        //         Post
        //     </button>
        //     <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
        //         <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
        //             <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
        //                 <svg onClick={() => setOpenModal(false)} className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path></g></svg>
        //                 <div className="flex justify-between items-center my-6">
        //                     <div>
        //                         <h1 className="text-2xl backdrop-blur-sm">Create Post</h1>
        //                     </div>
        //                     <div>
        //                         {
        //                             userInfo && <div className="flex gap-2 items-center">
        //                                 <div>
        //                                     <p>{displayName}</p>
        //                                     <p className="text-sm text-slate-400">Public</p>
        //                                 </div>
        //                                 <img className="w-10 h-10 rounded-full" src={photoURL} alt="" />
        //                             </div>
        //                         }
        //                     </div>
        //                 </div>
        //                 <div className="space-y-5">
        //                     <label>Title</label>
        //                     <input type="text" className="text-xl block w-full rounded-lg p-2 pl-5 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white border border-gray-400"/>
        //                     <label>Description</label>
        //                     <div className="relative">
        //                         <textarea name="" id="" className="h-32 block w-full rounded-lg p-2 pl-5 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white border border-gray-400" placeholder="Whats on your mind?"></textarea>
        //                     </div>
        //                     <div>
        //                        <MyComponent/>
        //                     </div>
                            
        //                 </div>
        //                 {/* button type will be submit for handling form submission*/}
        //                 <button type="button" className="relative button mt-5">
        //                     Submit
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Home;