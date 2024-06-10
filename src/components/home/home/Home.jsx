import About from "../about/About";
import Rooms from "../../rooms/Rooms"

const Home = () => {
    return (
        <div>
            <div className="mt-20 lg:w-[1200px] mx-auto">
                <About></About>
                <Rooms></Rooms>
            </div>
        </div>
    );
};

export default Home;