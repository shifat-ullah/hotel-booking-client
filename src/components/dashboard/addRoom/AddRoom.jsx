/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import AddRoomForm from "./AddRoomForm";
import { AuthContext } from "../../../providers/AuthProvider";
import { imgbbUplodeImage } from "../../Api/imgbb-host";
import { addRoomData } from "../../Api/room";
import toast from "react-hot-toast";


const AddRoom = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [uploadImage, setuploadImage] = useState('Upload Image');
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })


    const handleSubmit = event => {
        setLoading(true)
        event.preventDefault();
        const location = event.target.location.value
        const title = event.target.title.value
        const from = dates.startDate
        const to = dates.endDate
        const price = event.target.price.value
        const guests = event.target.total_guest.value
        const bedrooms = event.target.bedrooms.value
        const bathrooms = event.target.bathrooms.value
        const description = event.target.description.value
        const category = event.target.category.value
        const image = event.target.image.files[0];
        imgbbUplodeImage(image)
            .then(data => {

                const roomData = {
                    location,
                    title,
                    price,
                    guests,
                    bedrooms,
                    bathrooms,
                    description,
                    category,
                    image: data.data.display_url,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,

                    }
                }
                addRoomData(roomData)
                    .then(data => {
                        toast.success('room successful added')
                        console.log(data)
                        setLoading(false)
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false)
                    })
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false)
            })
    }

    const handleImageChange = (image) => {
        setuploadImage(image.name)

    }

    const handleSelect=(ranges)=>{
        setDates(ranges.selection)
        // setDates(ranges)
    }

    return (
        <div>
            <AddRoomForm
                handleSubmit={handleSubmit}
                loading={loading}
                handleImageChange={handleImageChange}
                uploadImage={uploadImage}
                handleSelect={handleSelect}
                dates={dates}

            ></AddRoomForm>
        </div>
    );
};

export default AddRoom;