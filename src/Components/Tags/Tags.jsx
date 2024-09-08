import { useEffect, useState } from "react";

const Tags = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('../../../public/public.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className="flex gap-4 justify-center overflow-x-auto pt-5">
                {
                    data.map(item => <button key={item.id} className="bg-white hover:bg-blue-600  hover:text-white text-gray-900 px-5 py-2 rounded-full">{item.tag}</button>)
                }
            </div>
        </div>
    );
};

export default Tags;