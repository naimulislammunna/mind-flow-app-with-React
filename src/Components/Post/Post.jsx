import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Post = () => {
    return (
        <div>
            <div className=" mx-auto my-6 max-w-[650px] rounded-lg bg-white shadow-lg dark:bg-[#18181B] border border-blue-900">
                <div className="flex items-center justify-between gap-10 px-4 py-4">
                    {/* Avatar image  */}
                    <div className="flex items-center gap-3">
                        <img width={100} height={100} className="h-16 w-16 rounded-full bg-black/40 object-cover" src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
                        <div className="flex flex-col">
                            <h2 className="text-xl font-semibold">Yoan Lee</h2>
                            <p className="text-gray-400">2 days ago</p>
                        </div>
                    </div>
                </div>
                {/* Post Image */}
                {/* <div className="flex flex-col gap-1">
                    <div className="w-full"><img width={400} height={200} className="h-[150px] w-full bg-black/40" src="https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" /></div>
                    <div className="flex gap-1 overflow-hidden">
                        <img width={201} height={201} className="h-[150px] w-[49.5%] bg-black/40" src="https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
                        <img width={202} height={202} className="h-[150px] w-[49.5%] bg-black/40" src="https://images.unsplash.com/photo-1460398495418-62c9b5d79fbf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card navigate ui" />
                    </div>
                </div> */}
                {/* Post content */}
                <div className="mt-3 space-y-2 px-4">
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">My new paintings</h2>
                    <h2 className="text-sm text-gray-500 dark:text-white/50">Hey, I captured some picture recently. You can check it and share you thoughts with me. I want to listen your thoughts...{' '}<span className="cursor-pointer text-[#3e96d4]">See more</span></h2>
                </div>
                {/* icons */}
                <div className="mt-4 flex justify-between px-4 pb-4">
                    <div className="flex gap-4 items-center">
                        <button className="flex items-center px-3 py-1 rounded-full border border-gray-500"> <span><AiOutlineLike /></span>UpVote <span className="ml-3">0</span></button>
                        <button className="flex items-center px-3 py-1 rounded-full border border-gray-500"> <span><AiOutlineDislike /></span> DownVote  <span className="ml-3">0</span></button>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="fill-[#1E293B] dark:fill-white/90" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8.92859 10C8.92859 10.2842 9.04147 10.5567 9.2424 10.7576C9.44333 10.9585 9.71585 11.0714 10 11.0714C10.2842 11.0714 10.5567 10.9585 10.7576 10.7576C10.9585 10.5567 11.0714 10.2842 11.0714 10C11.0714 9.71584 10.9585 9.44332 10.7576 9.24239C10.5567 9.04145 10.2842 8.92857 10 8.92857C9.71585 8.92857 9.44333 9.04145 9.2424 9.24239C9.04147 9.44332 8.92859 9.71584 8.92859 10ZM13.3928 10C13.3928 10.2842 13.5057 10.5567 13.7066 10.7576C13.9076 10.9585 14.1801 11.0714 14.4642 11.0714C14.7484 11.0714 15.0209 10.9585 15.2218 10.7576C15.4228 10.5567 15.5356 10.2842 15.5356 10C15.5356 9.71584 15.4228 9.44332 15.2218 9.24239C15.0209 9.04145 14.7484 8.92857 14.4642 8.92857C14.1801 8.92857 13.9076 9.04145 13.7066 9.24239C13.5057 9.44332 13.3928 9.71584 13.3928 10ZM4.46436 10C4.46436 10.2842 4.57724 10.5567 4.77817 10.7576C4.9791 10.9585 5.25162 11.0714 5.53577 11.0714C5.81993 11.0714 6.09245 10.9585 6.29338 10.7576C6.49431 10.5567 6.60719 10.2842 6.60719 10C6.60719 9.71584 6.49431 9.44332 6.29338 9.24239C6.09245 9.04145 5.81993 8.92857 5.53577 8.92857C5.25162 8.92857 4.9791 9.04145 4.77817 9.24239C4.57724 9.44332 4.46436 9.71584 4.46436 10ZM19.2231 6.125C18.7186 4.92634 17.9954 3.85045 17.0736 2.92634C16.1582 2.00758 15.0714 1.27728 13.875 0.776786C12.6473 0.261161 11.3437 0 10 0H9.95536C8.6027 0.00669643 7.29245 0.274554 6.06032 0.801339C4.87408 1.30697 3.79754 2.03857 2.89072 2.95536C1.97778 3.87723 1.26127 4.94866 0.765742 6.14286C0.252356 7.37946 -0.00656971 8.6942 0.000126634 10.0469C0.00770076 11.597 0.374434 13.1243 1.07154 14.5089V17.9018C1.07154 18.1741 1.17972 18.4353 1.37228 18.6278C1.56483 18.8204 1.826 18.9286 2.09831 18.9286H5.49336C6.87793 19.6257 8.40522 19.9924 9.95536 20H10.0022C11.3393 20 12.6361 19.7411 13.8571 19.2344C15.0475 18.7398 16.1302 18.0181 17.0446 17.1094C17.9664 16.1964 18.6919 15.1295 19.1985 13.9397C19.7253 12.7076 19.9932 11.3973 19.9999 10.0446C20.0066 8.68527 19.7432 7.36607 19.2231 6.125ZM15.8504 15.9018C14.2857 17.4509 12.2098 18.3036 10 18.3036H9.96206C8.61609 18.2969 7.27905 17.9621 6.09827 17.3326L5.91077 17.2321H2.76795V14.0893L2.6675 13.9018C2.03805 12.721 1.70323 11.3839 1.69653 10.0379C1.68761 7.8125 2.53804 5.72321 4.09829 4.14955C5.65631 2.57589 7.73887 1.70536 9.96429 1.69643H10.0022C11.1183 1.69643 12.2009 1.91295 13.2209 2.34152C14.2165 2.75893 15.1093 3.35938 15.8772 4.12723C16.6428 4.89286 17.2454 5.78795 17.6629 6.78348C18.0959 7.81473 18.3124 8.90848 18.3079 10.0379C18.2945 12.2612 17.4218 14.3438 15.8504 15.9018Z" /></svg>
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">40</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;