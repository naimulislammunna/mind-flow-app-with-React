import { AiOutlineDislike } from "react-icons/ai";

const DwonVote = ({dwonVote}) => {
    return (
        <button  className="flex items-center px-3 py-1 rounded-full border border-gray-500"> <span><AiOutlineDislike /></span> DownVote  <span className="ml-3">{dwonVote}</span></button>
    );
};

export default DwonVote;