const RoomInfo = ({roomData}) => {

  const {bathrooms, bedrooms, category,guests, description,image, location, title, host}=roomData;
    return (
      <div className='col-span-4 px-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
          >
            <div>Hosted by : {host.name}</div>
  
            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              src={host.image}
            />
          </div>
          <div
            className='
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            '
          >
            <div>{guests} guests</div>
            <div>{bedrooms} rooms</div>
            <div>{bathrooms} bathrooms</div>
          </div>
        </div>
  
        <hr className=" lg:w-full w-[430px]" />
        <div
          className='
        text-lg text-justify lg:w-full w-[400px] font-light text-neutral-500'
        >
          {description}
        </div>
        <hr className=" lg:w-full w-[430px]"  />
      </div>
    )
  }
  
  export default RoomInfo