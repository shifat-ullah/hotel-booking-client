
import { useContext, useState } from 'react';
import Button from '../button/Button';
import Calender from './Calender'
import { AuthContext } from '../../providers/AuthProvider';
import BookingModal from '../modal/BookingModa';
import { formatDistance } from 'date-fns';



const RoomReservastion = ({roomData}) => {
console.log(roomData)
    


    const [isOpen, setIsOpen]=useState(false)
    const {user, role}=useContext(AuthContext)
   
    const totalPrice = parseFloat(
        formatDistance(
            new Date(roomData.to),
            new Date(roomData.from)
          ).split(' ')[0]
    ) * roomData.price

    // price calculation

const [value, setValue]=useState({
    startDate: new Date(roomData.from),
    endDate: new Date(roomData.to),
    key: 'selaction'
})


const handleSelect= ranges=>{
    setValue({...value})
}

const modalHandler=()=>{
    
}

    const [bookingInfo, setBookingInfo]=useState({
        guest:{
            name:user.displayName,
            email:user.email,
            photo:user.photoUrl,
           
        },

        host:{
            email:roomData.host.email,

        },
        location:roomData.location,
        title:roomData.title,
        price:roomData.price,
        to:value.endDate,
        from:value.startDate
    })

    console.log(bookingInfo)

    
const closeModal=()=>{
    setIsOpen(false)
}



    return (
        <div className='border w-full'>
            <div className='flex p-4 gap-2 text-xl font-semibold'>
                <p> $ {roomData.price}</p>
                <p>Night</p>
            </div>
            <hr />
            <div className='w-full p-2'>
                <Calender handleSelect={handleSelect} value={value}></Calender>
            </div>
            <hr />
            <div className='p-2'>
                <Button onClick={()=>setIsOpen(true)} disabled={roomData.host.email === user.email} label='Reserve'></Button>
            </div>
            <hr />
            <div className=' flex justify-between p-4 text-xl font-bold'>
                <p>Total</p>
                <p>$ {totalPrice}</p>

            </div>

            <BookingModal closeModal={closeModal} bookingInfo={bookingInfo} isOpen={isOpen}></BookingModal>
        </div>
    );
};

export default RoomReservastion;