import { useContext, useState} from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const AddPost = () => {
    const [value, setValue] = useState(null);
    const { userInfo } = useContext(AuthContext);
    const {email, displayName, photoURL } = userInfo;
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => setValue(data);
  

    return (
        <div>
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-[620px] py-3 px-3">
                    <div className="flex justify-between items-center my-6">
                        <div>
                            <h1 className="text-2xl backdrop-blur-sm">Create Post</h1>
                        </div>
                        <div>
                            {
                                userInfo && <div className="flex gap-2 items-center">
                                    <div>
                                        <p>{displayName}</p>
                                        <p className="text-sm text-slate-400">{email}</p>
                                    </div>
                                    <img className="w-10 h-10 rounded-full" src={photoURL} alt="" />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="space-y-5">
                        <label>Title</label>
                        <input type="text" className="text-xl block w-full rounded-lg p-2 pl-5 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white border border-gray-400" {...register("title")}/>
                        <label>Description</label>
                        <div className="relative">
                            <textarea name="" id="" className="h-28 block w-full rounded-lg p-2 pl-5 outline-none drop-shadow-lg bg-white dark:bg-gray-700 dark:text-white border border-gray-400" placeholder="Whats on your mind?" {...register("description")} ></textarea>
                        </div>
                        <div>
                            <label>Tags</label>
                            <select  {...register("tag")} className='w-full p-2 border border-gray-800 rounded-lg'>
                                <option value="F-commerce">F-commerce</option>
                                <option value="E-commerce">E-commerce</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Python">Python</option>
                                <option value="React">React</option>
                            </select>
                        </div>
                        <div className="flex gap-4 items-center">
                        <button className="flex items-center px-3 py-1 rounded-full border border-gray-500"> <span><AiOutlineLike /></span>UpVote <span className="ml-3">0</span></button>
                        <button className="flex items-center px-3 py-1 rounded-full border border-gray-500"> <span><AiOutlineDislike /></span> DownVote  <span className="ml-3">0</span></button>
                    </div>

                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <div className='flex justify-end'>
                        <button type="submit" className="relative button mt-5">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;