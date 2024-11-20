import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function NavLeft() {
    return (
        <div className='flex items-baseline justify-between space-x-4 lg:w-6/12 md:w-4/12'>
            <h2 className='text-xl md:text-3xl font-semibold inline-flex items-center'>Thema <span className='bg-[#f5c748] text-xs p-1 rounded-md align-middle ml-2'>Home</span></h2>
            <button className='text-md lg:text-xl font-medium'><FontAwesomeIcon icon={faBars} className='mr-3' />Courses</button>
            <div className='relative hidden lg:block'>
                <input className='border border-[#8a65b4] rounded-full w-80 h-11 focus-within:border-[#7b4cb1] px-6' type="text" placeholder='Search courses, or instructors' />
                <button className='border border-[#8a65b4] rounded-full absolute right-1 top-1 w-14 h-9'><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </div>
    )
}
