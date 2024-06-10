
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservastion from "./RoomReservastion";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {

    const roomData=useLoaderData();
    console.log(roomData)
    return (
        <div className="mt-20 lg:w-[1200px] mx-auto">
            <h1 className=" w-[300px] text-center rounded mx-auto text-4xl font-bold bg-orange-500 text-white p-2 ">Rooms Details</h1>
            <div className="mt-20">
                <Header roomData={roomData}></Header>
            </div>


            <div className="grid lg:grid-cols-7 mt-5 gap-10  justify-between w-full ">
                
                    <RoomInfo roomData={roomData}></RoomInfo>
                
                <div className=' md:col-span-3 ml-14 md:ml-16 mx-auto order-first md:order-last'>
                    <RoomReservastion roomData={roomData}></RoomReservastion>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;