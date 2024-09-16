import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Tags = () => {
    const [data, setData] = useState([]);
    const {handleSearchTag} = useContext(AuthContext);

    useEffect(() => {
        fetch('../../../public/public.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    
    const handleTag = (tag) =>{
        handleSearchTag(tag)     
    }

    return (
        <div>
            <div className="flex gap-4 justify-center overflow-x-auto pt-5">
                {
                    data.map(item => <button
                        key={item.id}
                        onClick={() => handleTag(item.tag)}
                        className="bg-white hover:bg-blue-600  hover:text-white text-gray-900 px-5 py-2 rounded-full">{item.tag}</button>)
                }
            </div>
        </div>
    );
};

export default Tags;