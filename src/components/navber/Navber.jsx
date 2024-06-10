import Heading from "./Heading";
import Banner from './Banner';



const Navber = () => {
    return (
        <div className=" w-full">
           <Heading></Heading>
           <hr style={{border:'1px solid orange'}} />
           <Banner/>
        </div>
    );
};

export default Navber;