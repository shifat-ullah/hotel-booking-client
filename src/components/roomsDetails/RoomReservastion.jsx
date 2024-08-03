
import { useContext, useState } from 'react';
import Button from '../button/Button';
// import BookingModal from '../modal/BookingModa';
import Calender from './Calender'
import { AuthContext } from '../../providers/AuthProvider';


const RoomReservastion = ({roomData}) => {

    // const [bookingInfo, setBookingInfo]=useState({

    // })


    const [isOpen, setIsOpen]=useState(false)
    const {user, role}=useContext(AuthContext)


    return (
        <div className='border w-full'>
            <div className='flex p-4 gap-2 text-xl font-semibold'>
                <p> $ 200</p>
                <p>Night</p>
            </div>
            <hr />
            <div className='w-full p-2'>
                <Calender></Calender>
            </div>
            <hr />
            <div className='p-2'>
                <Button label='Reserve'></Button>
            </div>
            <hr />
            <div className=' flex justify-between p-4 text-xl font-bold'>
                <p>Total</p>
                <p>$ 300</p>

            </div>

            <BookingModal isOpen={isOpen}></BookingModal>
        </div>
    );
};

export default RoomReservastion;