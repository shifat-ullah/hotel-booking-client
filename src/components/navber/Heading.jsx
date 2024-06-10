/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../assets/image/header.webp'
import logo from '../../assets/image/logo.png.webp'
import NavInfo from './NavInfo';


const Heading = () => {
    return (
        <div>
            <div className="hero h-[250px] " style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <img className='text-center w-3/4 mx-auto' src={logo} alt="" />  
                    </div>
                    </div>
                    <div className='w-full  mt-[200px]'>
                    <NavInfo></NavInfo>
                    </div>
                </div>
                
            </div>
        
    );
};

export default Heading;