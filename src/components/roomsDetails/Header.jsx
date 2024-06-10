
const Header = ({roomData}) => {
    return (
        <div className="">
            <div>
                <h1 className=" text-xl font-bold">{roomData.title}</h1>
                <p>{roomData.location}</p>
            </div>

            <img className="lg:w-full w-[460px] overflow-hidden rounded mt-2 h-[400px]" src={roomData.image} alt="" />
        </div>
    );
};

export default Header;