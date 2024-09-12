import { useEffect, useState } from "react";
import queryString from 'query-string';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Tags = () => {
    const [data, setData] = useState([]);
    // const navigate = useNavigate();

    const handleTag = (tag) => {
        // let cuurentQuary = {category : tag}
        // const url = queryString.stringifyUrl({
        //     url: '/',
        //     query: cuurentQuary
        // })
        // navigate(url)

        Swal.fire({
                width: "300px",
                height: "100px",
                text: 'Register Successfully',
                position: "top-end",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              });
        
    }

    useEffect(() => {
        fetch('../../../public/public.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
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