import { useContext, useRef } from "react";
import Tags from "../Tags/Tags";
import { AuthContext } from "../../Auth/AuthProvider";

const Banner = () => {
    const {handleSearchTag} = useContext(AuthContext);
    const tags = useRef();

    const handleSearch = () =>{
        const searchValue = tags.current.value;
        handleSearchTag(searchValue);
    }
    
    return (
        <div className="bg-[#232837] w-full h-[400px] py-20">
            <div className="home-container text-center">
                <h1 className="text-5xl lg:text-6xl text-white font-bold"><span className="text-[#024fba]">LET’S CREATE </span>SOMETHING <br /> AMAZING</h1>
                <div className="text-white flex items-center justify-center my-8">
                    <input ref={tags} type="text" className="text-black pl-2 w-80 text-xl py-3 rounded-full" />
                    <button onClick={handleSearch} className="button -ml-28">Search</button>
                </div>
                <Tags></Tags>

            </div>
        </div>
    );
};

export default Banner;