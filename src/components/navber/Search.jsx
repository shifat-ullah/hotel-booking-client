import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div className='border-[1px] border-t-orange-500 w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-sm w-[100px] lg:w-auto lg:text-black text-white mx-auto font-semibold px-6'>Anywhere</div>
        <div className='hidden text-black sm:block  text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
          Any Week
        </div>
        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
          <div className=' lg:block hidden text-black'>Add Guests</div>
          <div className='p-2 bg-rose-500 rounded-full text-white'>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search