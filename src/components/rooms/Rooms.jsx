/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "./Card";
import Category from "../category/Category";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import { getRoomData } from "../Api/room";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category')
    const location = useLocation()
    const showCategory = location.pathname === '/';

    useEffect(() => {
       getRoomData()
            .then(data => {

                if (category) {
                    const remaining = data.filter(item => item.category === category);
                    setRooms(remaining)
                } else {
                    setRooms(data)
                }
            })
    }, [category])




    return (


        <div>
            <h1 className=" text-5xl font-bold text-center mt-20 mb-2">Our Rooms</h1>
            {showCategory ? <div className=" hidden"><Category></Category></div> : <Category></Category>}

            {
                rooms && rooms.length > 0 ? <div className=" px-3 mt-8 grid lg:grid-cols-4  md:grid-cols-2 xl:grid-cols-5 gap-10">
                    {
                        rooms.map((room, i) => <Card key={i} room={room}></Card>)
                    }
                </div>

                    :

                    <div className="mt-20 mb-20">
                        <Heading

                            title={'Room are not available in this category'}
                            subtitle={'please search to other category'}
                            center={true}
                        ></Heading>
                    </div>
            }
        </div>


    );
};

export default Rooms;