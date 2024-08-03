/* eslint-disable no-unused-vars */
import { useCallback, useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "./Avater";
import toast from 'react-hot-toast';
import { AuthContext } from "../../providers/AuthProvider";
import HostModal from "../modal/HostRequestModal";
import { becomeHost } from "../Api/auth";

const NavInfo = () => {

    const { user, logOut,role ,setRole} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal]=useState(false)

console.log(role)
    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])

    // const [modalOpen, setModalOpen] = useState(false)
    

    /* const modalHandler=(email)=>{
        becomeHost(email)
        .then((data) => {
            console.log(data)
            toast.success('you are host now. Post Your Rooms')
        }).catch((error) => {
            console.log(error.message)
        });
    } */


        const modalHandler = email => {
            becomeHost(email).then(data => {
              console.log(data)
              toast.success('You are host now, Post Rooms!')
              setRole('host')
              closeModal()
            })
          }

    const closeModal=()=>{
        setModal(false)
        setRole(null)
    }
    const signOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <>
            <div className="flex items-center justify-between px-10 bottom-0 w-full">
                <div className="flex gap-3 items-center">
                    <FaFacebook size={20} className=" text-white"></FaFacebook>
                    <FaInstagramSquare size={20} className=" text-white"></FaInstagramSquare>
                    <FaTwitter size={20} className=" text-white"></FaTwitter >
                </div>

                <div className=" hidden md:block">
                    <div className="text-white flex gap-7">
                        <Link>Home</Link>
                        <Link>About us</Link>
                        <Link to='/room'>Rooms</Link>
                        <Link>News</Link>
                        <Link>Contact</Link>
                    </div>

                </div>

                {/* menu drop Down */}




                <div>
                    <div className='relative '>
                        <div className='flex flex-row items-center gap-3'>
                            <div  className=' text-sm font-semibold py-3 px-8 rounded-full  transition   text-white'>

                               {!role&&
                                 <button onClick={()=>setModal(true)} disabled={!user} className="bg-orange-500  hover:text-black cursor-pointer p-2 rounded hover:bg-neutral-100">Book Your Room Now</button>
                               }

                                <HostModal
                                    isOpen={modal}
                                    modalHandler={modalHandler}
                                    closeModal={closeModal}
                                    email={user?.email}

                                ></HostModal>


                            </div>
                            <div
                                onClick={toggleOpen}
                                className='p-4 md:py-1 md:px-2 border-[1px] overflow-hidden border-neutral-200 flex flex-row items-center gap-3 rounded-full bg-slate-500 cursor-pointer hover:shadow-md transition'
                            >
                                <AiOutlineMenu />
                                <div className='hidden md:block'>
                                    {
                                        user ? <img className='w-[25px] h-[25px] rounded-full' src={user.photoURL} alt="" /> : <Avatar />
                                    }
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div className='absolute z-10 rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                                <div className='flex flex-col cursor-pointer'>
                                    <div className="flex justify-between">
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            About us
                                        </Link>
                                    </div>

                                    <div className="flex justify-between">
                                        <Link
                                            to='/room'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Rooms
                                        </Link>
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            News
                                        </Link>
                                    </div>

                                    <Link
                                        to='/'
                                        className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Contact
                                    </Link>
                                    {user ?
                                        <>

                                            <Link
                                                to='/dashboard'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Dashboard
                                            </Link>


                                            <div
                                                onClick={()=>{
                                                    setRole(null)
                                                    signOut()
                                                }}
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                            >
                                                Logout
                                            </div>


                                        </>

                                        : <>
                                            <Link
                                                to='/login'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to='/signup'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Sign Up
                                            </Link>
                                        </>
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </>
    );
};

export default NavInfo;