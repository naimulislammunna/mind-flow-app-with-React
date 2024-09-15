import { AiOutlineLike } from "react-icons/ai";

const UpVote = ({upVote}) => {
    return (
        <button className="flex items-center px-3 py-1 rounded-full border border-gray-500"> <span><AiOutlineLike /></span>UpVote <span className="ml-3">{upVote}</span></button>
    );
};

export default UpVote;