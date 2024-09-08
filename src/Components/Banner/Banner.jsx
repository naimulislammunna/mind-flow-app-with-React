import Tags from "../Tags/Tags";

const Banner = () => {
    return (
        <div className="bg-[#232837] w-full h-[400px] py-10">
            <div className="home-container text-center">
                <h1 className="text-5xl lg:text-6xl text-white font-bold"><span className="text-[#024fba]">LET’S CREATE </span>SOMETHING <br /> AMAZING</h1>
                <div className="text-white flex items-center justify-center my-8">
                    <input type="text" className="text-black pl-2 w-80 text-xl py-3 rounded-full" />
                    <button className="button -ml-28">Search</button>
                </div>
                <Tags></Tags>

            </div>
        </div>
    );
};

export default Banner;